/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const Create = () => {
  const router = useRouter();
  const [fields, setFields] = useState<any>({
    title: '',
    content: '',
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFields((prevState:any) => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
      const response = await fetch("/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields)
      })
      const data:any = response.json()
      if (response.ok){
        alert("Post created successfully")
        console.log(data.message)
        setFields({
          title: "",
          content: ""
        })
        router.push("/") // Redirect to the homepage after creating a post
      }else{
        console.log(data.message || "Failed to create post" )
      }
    }catch(e:any){
      console.error("Error submitting form:", e);
    }

  }
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-white w-full max-w-md shadow-lg rounded-lg py-8 px-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Create Post</h1>
        <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-slate-800"
            name='title'
            onChange={handleChange}
            value={fields.title}
          />
          <textarea
            placeholder="Content"
            name="content"
            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2
             focus:ring-slate-800 resize-none h-32"
             onChange={handleChange}
             value={fields.content}
          />
          <button
            type="submit"
            className="bg-slate-800 text-white font-semibold py-3 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;

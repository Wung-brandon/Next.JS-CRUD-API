"use client"
import React from 'react';
import Searchbar from './Searchbar';
import { useRouter } from 'next/navigation'; // Import from next/navigation

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center px-10 py-10 bg-slate-800 text-white">
      <h2 className="text-2xl cursor-pointer" onClick={() => router.push("/")}>W.K</h2>
      <Searchbar />
      <button
        onClick={() => router.push('/create-post')} // Navigation stays the same
        className="bg-white text-black py-2 px-6 rounded-xl"
      >
        Add Post
      </button>
    </div>
  );
};

export default Navbar;

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PostCard from "@/components/PostCard";
import { useState, useEffect } from "react";
import PostProps from "@/types/postTypes";

export default function Home() {
  const [data, setData] = useState<PostProps[]>([]);

  const fetchAllPosts = async () => {
    try {
      const response = await fetch("/api");
      const postData: any = await response.json();
      setData(postData.data);
      console.log("data", postData.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  console.log("all data", data);

  return (
    <div className="mx-[200px] mt-10">
      {data.length > 0 ? (
        data.map((post) => (
          <PostCard
            key={post._id} // Use the unique `_id` as the key
            title={post.title}
            content={post.content}
          />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

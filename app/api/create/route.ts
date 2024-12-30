/* eslint-disable @typescript-eslint/no-explicit-any */
import connectToDatabase from "@/lib/db";
import Posts from "@/models/Posts";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    // Parse the request body
    const { title, content } = await req.json();

    // Create a new post document
    const newPost = new Posts({ title, content });
    await newPost.save();

    return NextResponse.json(
      { success: true, message: "Post created successfully", data: newPost },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { success: false, message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}

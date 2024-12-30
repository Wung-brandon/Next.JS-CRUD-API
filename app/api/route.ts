/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import connectToDatabase from "@/lib/db"; // MongoDB connection function
import Posts from "@/models/Posts"; // Post model

export async function GET() {
  try {
    // Connect to the database
    await connectToDatabase();

    // Retrieve all posts
    const posts = await Posts.find({});

    // Return the posts as a response
    return NextResponse.json({ success: true, data: posts });
  } catch (error: any) {
    // Return an error response
    return NextResponse.json(
      { success: false, message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}

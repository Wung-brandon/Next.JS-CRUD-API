import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
    title: {type: String},
    content: {type: String},
})

const Posts = mongoose.models.Posts || mongoose.model("Posts", postsSchema);
export default Posts;
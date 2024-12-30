interface PostProps{
    title: string,
    content: string,
    _id?: string,
    onDelete?: () => void,
    onEdit?: (post: PostProps) => void,
}

export default PostProps
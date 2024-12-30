import React from 'react'
import { Edit, Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import PostProps from '@/types/postTypes'

const PostCard:React.FC<PostProps> = ({title, content, onDelete, onEdit}) => {
  return (
    <div className='mt-4 bg-slate-300 text-black w-full py-10 px-5'>
        <div className='flex justify-between'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <div className='flex'>
                <IconButton>
                    <Edit color='primary'/>
                </IconButton>
                <IconButton>
                    <Delete color='error'/>
                </IconButton>
            </div>
        </div>
        <p className='text-slate-400 text-xl'>{content}</p>
        

    </div>
  )
}

export default PostCard
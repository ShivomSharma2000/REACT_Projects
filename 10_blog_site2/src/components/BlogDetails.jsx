import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
    console.log('post id is :');
    console.log(post.id);
  return (
    <div>
         <NavLink to={`/blog/${post.id}`}> <span className='text-2xl font-bold'>{post.title}</span></NavLink>
         <h2>By
          <span>{post.author}</span> On{' '}
            <NavLink to={`/categories/${post.category.replaceAll(' ','-')}`}><span className='font-bold'>{post.category}</span></NavLink>
         </h2>

         <p>Posted On <span>{post.date}</span></p>
         <p>{post.content}</p>
        <div>
        {
            post.tags.map((tag, index)=>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(' ','-')}`}><span className='font-bold'>{`#${tag}`}</span></NavLink>
            ))
         }

        </div>
         
    </div>
  )
}

export default BlogDetails
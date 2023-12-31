import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'
import BlogDetails from './BlogDetails'

export const Blogs = () => {

  const {loading, posts} = useContext(AppContext)
  console.log('Data in post is: ');
  console.log(posts);
  
  return (
    <div key={posts.id} className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
        {
          loading ? (<Spinner />) :posts.length === 0 ? (<h1>No Blog Found</h1>) : (posts.map((post)=>(
            <BlogDetails key={post.id} post={post} />
        
          ))
        )}
    </div>
  )
}

export default Blogs
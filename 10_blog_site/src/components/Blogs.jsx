import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'

export const Blogs = () => {

  const {loading, posts} = useContext(AppContext)
  console.log('Data in post is: ');
  console.log(posts);
  
  return (
    <div key={posts.id} className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
        {
          loading ? (<Spinner />) :(posts.length === 0 ? (<h1>No Data Available</h1>) : (posts.map((post,index)=>(
              <div key={index}>
                  <h2 className="font-bold text-sm ">{post.title}</h2>
                  <p className="text-[14px]">By <span className="italic">{post.author} on <span className="underline font-bold">{post.category}</span></span></p>
                  <h4 className="text-[14px]">Posted On <span>{post.date}</span></h4>
                  <p className="text-[16px] mt-[13px]">{post.content}</p>

                  <div className="flex flex-wrap gap-x-2 items-center">
                  {post.tags.map((tag, index)=>{
                    return <span key={index} className="text-xs font-semibold underline text-blue-700 cursor-pointer">#{tag}</span>
                  })}
                  </div>
              </div>
          
          )))) 
        }
    </div>
  )
}

export default Blogs
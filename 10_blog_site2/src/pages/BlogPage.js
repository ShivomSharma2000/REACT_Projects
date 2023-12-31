import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
// import { baseUrl } from '../baseUrl';
import BlogDetails from '../components/BlogDetails';
import { Header } from '../components/Header';


const BlogPage = () => {

  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const navigation = useNavigate();
  const location = useLocation();
  const blogId = location.pathname.split('/').at(-1);
  
  const {loading, setLoading} = useContext(AppContext);

  async function fetchRelatedData(){
    setLoading(true)
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    // console.log(url);
    try{
      const result = await fetch(url)
      const data = await result.json();
      console.log('Data of blogpage is :');
      console.log(data);
      setBlog(data.blog)
      setRelatedBlogs(data.relatedBlogs)
    }

    catch(error){
      console.log('Error occured in Blog Page');
      setBlog(null)
      setRelatedBlogs([])
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedData()
    }
  }, [location.pathname])

  return(
    <div className='mt-20'>
    <Header />
    <div>
      <button onClick={() => navigation(-1)}>Back</button>
    </div>
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />
          <h2>Releated Blogs</h2>
          {relatedBlogs.map((post) => (
            <div key={post.id}>
              <BlogDetails post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Blog Found</p>
      )}
    </div>
  </div>
  )
}

export default BlogPage
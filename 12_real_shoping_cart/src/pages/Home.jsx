import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "./Spinner";

const Home = () => {

  const url = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchData(){
    setLoading(true);
    try{
    const res = await fetch(url);
    const data = await res.json();
    setPosts(data)
    }
    catch(err){
      console.log("Error occured");
      console.log(err);
      setPosts([])
    }

    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <div>
      {
        loading ? (<Spinner />) : 
        posts.length > 0 ? (
        
        <div className="grid  xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[70vh]">{
            posts.map((post)=>(
              <Product key={post.id} post={post}/>
        
        ) )
        }
        </div>) :
         (
          <div className="flex justify-center items-center">
            <h2>No Data Available</h2>
          </div>
          )

      }
    </div>
  )
}

export default Home
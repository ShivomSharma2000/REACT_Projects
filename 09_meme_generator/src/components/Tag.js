import React, { useState } from 'react'
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export const Tag = () => {

  const [tag, setTag] = useState('car')

  // const [gif, setGif] = useState('')
  // const [loading, setLoading] = useState(true)

  // async function fetchData(){
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url)
  //   console.log(data.data.images.downsized_large.url);
  //   setGif(data.data.images.downsized_large.url)
  //   setLoading(false)
  // }

  // useEffect(()=>{
  //   fetchData();  
  // }, [])

  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className="w-1/2 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-3xl uppercase underline font-bold">A Random {tag} Gif</h1>

        { loading ? <Spinner /> : <img src={gif} width="450" height={250} /> }
        
        <input type='text' 
        className="w-10/12 bg-white text-center text-xl py-2 rounded-lg mb-2"
        onChange={(event)=>{setTag(event.target.value)}}
        value={tag}
        />

        <button 
        onClick={()=>fetchData(tag)}
        className="w-10/12 bg-yellow-100 text-xl py-2 rounded-lg font-bold mb-2">
            Generate
          </button>
    </div>
  )
}

import axios from 'axios';
import { useEffect, useState } from 'react'

export const useGif = (tag) => {
 
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(true)

    async function fetchData(tag){
        setLoading(true)
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url)
        console.log(data.data.images.downsized_large.url);
        setGif(data.data.images.downsized_large.url)
        setLoading(false)
    }

    useEffect(()=>{
        fetchData(tag);  
    }, [])

    return {gif, loading, fetchData}

}

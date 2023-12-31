import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl'
import { useNavigate } from "react-router-dom";

//step1: create context
export const AppContext = createContext();

export function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] =useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigation = useNavigate();

    //data filling
    async function dataFetching(page, tag = null, category){
        setLoading(true)
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`
        } 
        if(category){
            url += `&category=${category}`
        }
        
        try{
            const result = await fetch(url);
            const data = await result.json();
            if(!data.posts || data.posts.length === 0){
                throw new Error("Something went wrong")
            }
            setPage(data.page)
            setTotalPages(data.totalPages)
            setPosts(data.posts)
        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null)
        }
        setLoading(false)
    }

    function handlePageChange(page){
        navigation({search:`?page=${page}`})
        setPage(page);
        // dataFetching(page)
    }
    
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        dataFetching,
        handlePageChange
    }

    
//step2
    return <AppContext.Provider value={value}>
                {children}
           </AppContext.Provider>

}
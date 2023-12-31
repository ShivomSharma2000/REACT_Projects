import { createContext, useEffect, useState } from "react";
import {baseUrl} from '../baseUrl'

//step1
export const AppContext = createContext();

export function AppContextProvider({children}){

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] =useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling
    async function dataFetching(page){
        setLoading(true)
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
           
            setPage(data.page)
            setTotalPages(data.totalPages)
            setPosts(data.posts)
            setLoading(false)
        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null)
        }
        
    }

    function handlePageChange(page){
        setPage(page);
        dataFetching(page)
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
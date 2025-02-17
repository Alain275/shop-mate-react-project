import React, { useState,useEffect} from 'react'

const useFetch = (apiPath,queryTerm="") => {
    const [data,setData]=useState([])
    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
  
   
    useEffect(()=>{
        async function feachMovies() {
        const response = await fetch(url)  
        const json =  await response.json();
        setData(json.results);
        }
        feachMovies();
    },[url,data])  
    
    return {data}
        
    
}

export default useFetch
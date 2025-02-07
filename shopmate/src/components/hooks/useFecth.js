import { useState,useEffect } from "react"
 const useFecth = (url) => {
    const[data,setDta] = useState(null);
    const[loading,setLoading] = useState(false)
    const[error,setError]=useState("")
    
    useEffect(()=>{
        const fectchData = async () => {
            setLoading(true)
            try{

                const response = await fetch(url);
                const result = await response.json();
                setLoading(false)
                setDta(result)
                console.log(result)
                
            }
            catch(error){
                setLoading(false)
                // console.log(error.message);
                setError(error.message);
            }
            
        }
        fectchData()
    },[url]);
  return{data,loading,error}
}

export default useFecth
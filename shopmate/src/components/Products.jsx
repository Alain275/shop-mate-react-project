import React, { useEffect ,useCallback} from 'react'
import { useState } from 'react';
import "./Product.css"; 



const Products = () => {
    const[products,setProducts] = useState([])
    const[url,setUrl] = useState("http://localhost:8000/products")
    
    const fetchProduct = useCallback(async () =>{
        const response = await fetch(url)
        const data = await response.json();
        setProducts(data);
    },[url]);

    useEffect(()=>{
        fetchProduct();
    },[fetchProduct])

  return (
   <section>
       <div className="btns">
        <div className='btn'>
       <button onClick={()=>setUrl("http://localhost:8000/products")}> all</button>
       <button onClick={()=>setUrl("http://localhost:8000/products?in_stock=true")}> In stock only</button>
       </div>
       <div></div>
       </div>
    {products.map((product)=>{
        return( 
           
            
            <div className="card" key={product.id}>
                <p className='id'>{product.id}</p>
                <p className='name'>{product.name}</p>
                <p className='info'>
                    <span className='dollor'>$<span className='price'>
                        {product.price}</span></span>
                    <span className={
                        product.in_stock ? "instock":"unvailable"
                    }>{product.in_stock}</span>
                </p>
            </div>
           
            
    )})}
   </section>
  )
}

export default Products
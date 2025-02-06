import React from 'react'
import { useState } from 'react';

const Products = () => {
    const[products,setProducts] = useState([])
    console.log(products)


    fetch("http://localhost:8000/products")
    .then(response => response.json())
    .then(data => console.log(data));
  return (
    <div>products</div>
  )
}

export default Products
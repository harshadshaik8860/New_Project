import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from  'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Data from'./Data'

 const Geans=() =>{

    const [product, updateProduct]=useState([]);
    const [error , updateError]=useState('');

    const getData = ()=>{
        
        let Url = "http://localhost:3002/Jeans";
        axios.get(Url)
        .then(response=>updateProduct(response.data))
            
    }

    useEffect(() => {
       getData();
    }, [true])

    return (
        <div className="bg">
            <Header />
           <Data  product={product}/>
        </div>
    )
}
export default Geans;
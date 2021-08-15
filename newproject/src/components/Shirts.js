import React from 'react'
import {useState , useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Data from './Data';
import Header from './Header';

 const Shirts=()=> {

    const [product, updateProduct]=useState([]);
    const [error , updateError]=useState('');

    const getData = ()=>{
        
        let Url = "http://localhost:3002/Shirts";
        axios.get(Url)
        .then(response=>updateProduct(response.data))
            
    }

    useEffect(() => {
       getData();
    }, [true])

    return (
        <div>
            <Header />
            <Data product={product}/>
            </div>
        
    )
}
export default Shirts;
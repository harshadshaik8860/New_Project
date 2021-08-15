import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Data from './Data';
import Header from './Header';

 const Tshirts =()=> {

    const [product , updateProduct] = useState([]);
    const[message , updateMessage] = useState('');

    const getData = () =>{
        axios.get("http://localhost:3002/Tshirts")
        .then(response=>updateProduct(response.data))
    }

    useEffect(()=>{
        getData();
    },[true])
    return (
        <div>
            <Header />
            <Data product={product}/>
        
        </div>
    )
}

export default Tshirts;

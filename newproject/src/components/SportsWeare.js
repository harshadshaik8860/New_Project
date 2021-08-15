import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Data from './Data';

 const SportsWeare=()=> {

    const [product , updateProduct] = useState([]);
    const [message, updateMessage] = useState();

    const getData = () =>{
        axios.get("http://localhost:3002/SportsWeare")
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
export default SportsWeare;
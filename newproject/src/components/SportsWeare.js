import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Data from './Data';

 const SportsWeare=()=> {

    const [product , updateProduct] = useState([]);
    const [message, updateMessage] = useState();
    const [cart , updateCartItem] = useState([]);

    const getData = () =>{
        axios.get("http://localhost:3002/SportsWeare")
        .then(response=>updateProduct(response.data))
    }
    const getCart = () =>{
        axios.get("http://localhost:3002/CartItems")
        .then(response=>{updateCartItem(response.data)
        })
    }

    useEffect(()=>{
        getData();
        getCart();
    },[true])

    return (
        <div>
            <Header cartitem={cart.length} />
            <Data product={product}/>
        </div>
    )
}
export default SportsWeare;
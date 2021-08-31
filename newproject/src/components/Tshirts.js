import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import Data from './Data';
import Header from './Header';

 const Tshirts =()=> {

    const [product , updateProduct] = useState([]);
    const[message , updateMessage] = useState('');
    const [cart , updateCartItem] = useState([]);


    const getCart = () =>{
        axios.get("http://localhost:3002/CartItems")
        .then(response=>{updateCartItem(response.data)
        })
    }

    const getData = () =>{
        axios.get("http://localhost:3002/Tshirts")
        .then(response=>updateProduct(response.data))
    }

    useEffect(()=>{
        getData();
        getCart();
    },[true])
    return (
        <div>
            <Header cartitem={cart.length}/>
            <Data product={product}/>
        
        </div>
    )
}

export default Tshirts;

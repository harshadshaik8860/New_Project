import React from 'react'
import {useState , useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Data from './Data';
import Header from './Header';

 const Shirts=()=> {

    const [product, updateProduct]=useState([]);
    const [error , updateError]=useState('');
    const [cart , updateCartItem] = useState([]);

    const getData = ()=>{
        
        let Url = "http://localhost:3002/Shirts";
        axios.get(Url)
        .then(response=>updateProduct(response.data))
            
    }

   

  const getCart = () =>{
    axios.get("http://localhost:3002/CartItems")
    .then(response=>{updateCartItem(response.data)
    })
}

    useEffect(() => {
       getData();
       getCart();
    }, [true])


    return (
        <div>
            <Header  cartitem={cart.length}/>
            <Data product={product}/>
            </div>
        
    )
}
export default Shirts;
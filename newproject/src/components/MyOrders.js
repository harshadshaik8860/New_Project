import React,{useState, useEffect} from 'react'
import Header from './Header';
import axios from 'axios';


const MyOrders = () => {

    const [cartitem , updateCartItem] = useState([]);
    const getCart = () =>{
        axios.get("http://localhost:3002/CartItems")
        .then(response=>{updateCartItem(response.data)
           
        })
    }

    useEffect(()=>{
        getCart();
    },[true])
    return (
        <div>
            <Header cartitem={cartitem.length}/>
            <p>Empty</p>
        </div>
    )
}

export default MyOrders

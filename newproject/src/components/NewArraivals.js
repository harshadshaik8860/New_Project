import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Header from './Header';
import Geans from './Geans';


const NewArraivals=(props)=> {
   
    const [cart , updateCartItem] = useState([]);

  const getCart = () =>{
    axios.get("http://localhost:3002/CartItems")
    .then(response=>{updateCartItem(response.data)
    })
}

useEffect(() => {
   getCart();
}, [true])
    return (
        <div>
            <Header  cartitem={cart.length}/>
            <h1>Welocme to NewArraivals Page</h1>
        </div>
    )
}
export default NewArraivals;
import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Data from './Data'
import MyCart from './MyCart';
import AvailableStock from './AvailableStock';

const Geans = (props) => {

    const [product, updateProduct] = useState([]);
    const [error, updateError] = useState('');
    const [message , updateMessage] = useState('');
    const [cartitem , updateCartItem] = useState([]);

    const getData = () => {
        let Url = "http://localhost:3002/Jeans";
        axios.get(Url)
            .then(response=>{
                updateProduct(response.data)
            })

    }

    const addCart = (productData)=>{
        let url = "http://localhost:3002/CartItems"
        axios.post(url , productData)
        .then(response=>{
            updateMessage("Added successfull");
           getCart(); 
        })
    }
    

    const getCart = () =>{
        axios.get("http://localhost:3002/CartItems")
        .then(response=>{updateCartItem(response.data)
        })
    }

    useEffect (() => {
        getData();
       getCart();
    }, [true])

    return (
        <div className="bg">
            <Header cartitem={cartitem.length}/>
           {/* <Data  product={product} addCart={addCart.bind(this,props.xpro)} message={message}/> */}
           <div className="row">
        <div className="col-lg-4">
            <ul className="list-group">
                <li className="list-group-item active text-center">Menu</li>
                <li className="list-group-item text-center ">
                    <Link className="text-secondary" to="/home/tshirts">T-shirts </Link>
                </li>
                <li className="list-group-item text-center">
                    <Link className="text-secondary" to="/home/shirts">Shirts </Link>
                </li>
                <li className="list-group-item text-center">
                    <Link className="text-secondary" to="/home/geans">Geans </Link>
                </li>
                <li className="list-group-item text-center">
                    <Link className="text-secondary" to="/home/sportsweare">SportsWeare</Link>
                </li>
            </ul>

        </div>
        <div className="col-lg-8">
           <p>{message}</p>
           
            <div className="row mt-3">
               
                    {
                        product.map((xpro , index)=>{
                            return(
                                <div className="col-lg-3" key={index}>
                                <div className="card lcard">
                                <div className="card-header"></div>
                                <div className="card-body text-center">
                                    <p>P.name: {xpro.Pname}</p> 
                                    <p>Model : {xpro.Mname} </p>
                                    <p> Available Stock : {xpro.Stock}</p>
                                    <p>Price : {xpro.Price}</p>  
                                     
                                </div>
                                <div className="card-footer text-center">
                                   <button onClick={addCart.bind(this , xpro)}>
                                       <i className="fa fa-plus">Add to cart</i>
                                   </button>
                                </div>
                                
                            </div>
                            </div>
                            )
                        })
                    }
                    
                </div>
            

        </div>
        </div>
        </div >
       
        
    )
   
}
export default Geans;
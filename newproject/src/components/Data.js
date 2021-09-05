import React, { useState , useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Data = (props)=>{
const{ product, addCart,message } =props
    
    return(
        <>
       
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
                        product.map((xpro , id)=>{
                            return(
                                <div className="col-lg-3" key={id}>
                                <div className="card lcard">
                                <div className="card-header"></div>
                                <div className="card-body text-center">
                                    <p>P.name: {xpro.Pname}</p> 
                                    <p>Model : {xpro.Mname} </p>
                                    <p> Available Stock : {xpro.Stock}</p>
                                    <p>Price : {xpro.Price}</p>  
                                     
                                </div>
                                <div className="card-footer text-center">
                                   <button onClick={addCart}>
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
        </>
    )
}
export default Data;
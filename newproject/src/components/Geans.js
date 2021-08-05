import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from  'react-router-dom';
import axios from 'axios';

 const Geans=() =>{

    const [product, updateProduct]=useState([]);
    const [error , updateError]=useState('');

    const getData = ()=>{
        
        let Url = "http://localhost:3002/jeans";
        axios.get(Url)
        .then(response=>updateProduct(response.data))
            
    }

    useEffect(() => {
       getData();
    }, [true])

    return (
        <div className="bg">
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
                {/* <p>{product.length}</p> */}
                {/* <p className="text-center text-danger">{error}</p> */}
               
                <div className="row mt-3">
                   
                        {
                            product.map((xpro , index)=>{
                                return(
                                    <div className="col-lg-4">
                                    <div className="card lcard">
                                    <div className="card-header" key={xpro.id}>
                                        {xpro.p}
                                    </div>
                                    <div className="card-body text-center">
                                       <p>Model : {xpro.Model} 
                                        <br/>
                                      Available Stock : {xpro.Stock}</p>  
                                    </div>
                                    <div className="card-footer text-center">
                                        <p>Price : {xpro.Price}</p>
                                    </div>
                                    
                                </div>
                                </div>
                                )
                            })
                        }
                        
                    </div>
                

            </div>
            </div>
        </div>
    )
}
export default Geans;
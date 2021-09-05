import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import './mycart.css'
import Geans from './Geans';
import Deatils from './Deatils';

import MyOrders from './MyOrders';


function MyCart () {
    
    const [cartitem, updateCartItem] = useState([]);
    const [message, updateMessage] = useState('');
    const [message1, updateMessage1] = useState('');
    const [count , updateCount] = useState('');
    const [searchTerm, updateSearchterm] =useState([]);
    const [searchresult, updateSearchResult] =useState("no data");
    
   

    const getCart = () => {
        axios.get("http://localhost:3002/CartItems")
            .then(response => {
                updateCartItem(response.data)

            })
    }

    const deleteItem = (pid) => {
        axios.delete("http://localhost:3002/CartItems/" + pid)
            .then(response => {
                updateMessage("Item Removed");
                getCart();
            })

    }

    const Orders =(data)=>{
        axios.post("http://localhost:3002/Myorders", data)
        .then(response=>{
            updateMessage1("placed")
            getCart();
            
        })
    }

    const searchHandler=(e)=>{
         updateSearchterm(e.target.value);
         
    }
    useEffect(() => {
        getCart();
        deleteItem();
        
       

    }, [true])


    return (
        <div>
            <Header cartitem={cartitem.length} />
            <p className="text-success text-center">{message}</p>
            <p className="text-success text-center">{message1}</p>
           <div className="col-sm-4">
               <input type="text" className="form-control form-control-sm" autoFocus onChange={searchHandler}/>
           </div>
            <div className="mt-5">
           
                {
                    cartitem.filter((element)=>{
                        if(searchTerm ==""){
                            return element
                        }else if(Object.values(element).join("").toLowerCase().includes(searchTerm.toLowerCase())){
                            return element     
                        }
                           
                        
                          
                    }).map((item, index) => {
                        return (
                            <div className="row">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-8">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row" key={index}>
                                                <div className="col-lg-3">
                                                    <div className="mb-2"> <lable>Product Name</lable></div>
                                                    {item.Pname}
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="mb-2"> <lable>Size</lable></div>
                                                    {item.Size}

                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="mb-2"> <lable>Model</lable></div>
                                                    {item.Mname}

                                                </div>

                                                <div className="col-lg-2">
                                                    <div className="mb-2">  <lable>Delete</lable>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-danger btn-sm" onClick={deleteItem.bind(this, item.id)}>Delete</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3">
                                                <div className="mb-2">
                                                    {/* <Deatils/> */}
                                                </div>
                                                </div>
                                                <div className="col-lg-2">
                                                    <div className="mb-2">
                                                        <label>Price</label>
                                                    </div>
                                                    {item.Price}
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2">
                                    <button className="btn btn-primary" onClick={Orders.bind(this, item)}> Place order</button></div></div>
                        )
                    })
                }





            </div>

        </div>


    )
}


export default MyCart;

import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

import Data from './Data'
import MyCart from './MyCart';
import AvailableStock from './AvailableStock';
import Deatils from './Deatils';

const Geans = (props) => {

    const [product, updateProduct] = useState([]);
    const [error, updateError] = useState('');
    const [message, updateMessage] = useState('');
    const [cartitem, updateCartItem] = useState([]);
    const [count, updateCount] = useState('');
    const [fliterP, updateFilterPrice] = useState([]);
    const [fliterPr, updateFilterPriceR] = useState();
    const [fliterS, updateFilterSize] = useState();



    const getData = () => {
        let Url = "http://localhost:3002/Jeans";
        axios.get(Url)
            .then(response => {
                updateProduct(response.data)
            })

    }

    // code removed
    

    const addCart = (productData) => {

        let url = "http://localhost:3002/CartItems"
        axios.post(url, productData)
            .then(response => {
                updateMessage("Added successfull");
                getCart();
            })
    }


    const getCart = () => {
        axios.get("http://localhost:3002/CartItems")
            .then(response => {
                updateCartItem(response.data)
            })
    }
    const filterPrice = (e) => {
            if (e.target.value == "0-500") {
                var fp = product.filter((element) => {
                    return element.Price <= 500
                })
                updateFilterPrice(fp)
            } else {

                if (e.target.value == "500-1000") {
                    var fp = product.filter((element) => {
                        return element.Price >= 1000
                    })
                    updateFilterPrice(fp)
                }

            }
        }

    

    const filterSize = (e) => {

        if (e.target.value == "26-30") {
            var fp = product.filter((element) => {
                return element.Size <= 30
            })
            updateFilterPrice(fp)
        } else {
            if (e.target.value == "32-40") {
                var fp = product.filter((element) => {
                    return element.Size >= 32
                })
                updateFilterPrice(fp)
            } else {
                if (e.target.value == "42-48") {
                    var fp = product.filter((element) => {
                        return element.Size >= 48
                    })
                    updateFilterPrice(fp)
                }
            }
        }
    }




    useEffect(() => {
        getData();
        getCart();

    }, [true])

    return (
        <div className="bg">
            <Header cartitem={cartitem.length} />

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

                    <div className="row">
                        <div className="col-lg-8"></div>
                        <div className="col-lg-2">
                            <select onChange={filterSize}>
                                <option value="">Size</option>
                                <option value="26-30">26-30</option>
                                <option value="32-40">32-40</option>
                                <option value="42-48">42-48</option>
                            </select>
                        </div>
                        <div className="col-lg-2">

                            <select onChange={filterPrice}>
                                <option>filter</option>
                                <option value="0-500">0-500</option>
                                <option value="500-1000">500-1000</option>
                            </select>

                        </div>

                    </div>

                    <div className="row mt-3">

                        {
                            (filterPrice == "") ?
                               ( product.map((xpro, index) => {
                                    return (
                                        <div className="col-lg-3" key={index}>
                                            <div className="card lcard">
                                                <div className="card-header"></div>
                                                <div className="card-body  body1text-center">
                                                    <p>P.name: {xpro.Pname}</p>
                                                    <p>Size: {xpro.Size}</p>
                                                    <p>Model : {xpro.Mname} </p>
                                                    <p> Available Stock : {xpro.Stock}</p>
                                                    <p>Price : {xpro.Price}</p>
                                                    <label>Quantity :</label>
                                                    <select className="form-control" onChange={(e) => updateCount(e.target.value)}>
                                                        <option value='1'>1</option>
                                                        <option value='2'>2</option>
                                                        <option value='3'>3</option>
                                                        <option value='4'>4</option>
                                                    </select>
                                                </div>
                                                <div className="card-footer text-center">

                                                    <button onClick={addCart.bind(this, xpro)}>
                                                        <i className="fa fa-plus">Add to cart</i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>
                                    )
                                }) ):

                                fliterP.map((xpro, index) => {
                                    return (
                                        <div className="col-lg-3" key={index}>
                                            <div className="card lcard">
                                                <div className="card-header"></div>
                                                <div className="card-body  body1text-center">
                                                    <p>P.name: {xpro.Pname}</p>
                                                    <p>Size: {xpro.Size}</p>
                                                    <p>Model : {xpro.Mname} </p>
                                                    <p> Available Stock : {xpro.Stock}</p>
                                                    <p>Price : {xpro.Price}</p>
                                                    <label>Quantity :</label>
                                                    <select className="form-control" onChange={(e) => updateCount(e.target.value)}>
                                                        <option value='1'>1</option>
                                                        <option value='2'>2</option>
                                                        <option value='3'>3</option>
                                                        <option value='4'>4</option>
                                                    </select>
                                                </div>
                                                <div className="card-footer text-center">

                                                    <button onClick={addCart.bind(this, xpro)}>
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

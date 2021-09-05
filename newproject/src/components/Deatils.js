
import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

import MyCart from './MyCart';
import MyOrders from './MyOrders';



const Deatils = (props) => {



    const [count, updateCount] = useState('');
    const [message, updateMessage] = useState('');

    const addCount = () => {
        let countr={"Qty":count}
        let url = "http://localhost:3002/CartItems"
        axios.post(url, countr)
            .then(response => {
                updateMessage("Added successfull");
                
            })
    }

    return (
        <div>

            <div className="col-lg-12">
                <div className="mb-2">
                    <label>Quantity :</label>
                    <select className="form-control" onClick={addCount} onChange={(e) => updateCount(e.target.value)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                </div>

            </div>
        </div>
    )
}


export default Deatils;


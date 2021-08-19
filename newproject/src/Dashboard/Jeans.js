import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MenuList from './MenuList';
import Logout from './Logout';


const Jeans = () => {

    const [product, updateProduct] = useState([]);
    const [error, updateError] = useState('');
    const [message, updateMessage] = useState('');
    const getData = () => {

        let Url = "http://localhost:3002/Jeans";
        axios.get(Url)
            .then(response => updateProduct(response.data))

    }

   const deleteData = (pid)=>{
    axios.delete("http://localhost:3002/Jeans/"+pid)
    .then(response=>{
        updateMessage("Product deleted successfully")
        getData();
    })
    
   }

    useEffect(() => {
        getData();
        deleteData();
    }, [true])

    return (
        <div>
            <Logout/>
            <div className="row">
                <div className="col-lg-2">
                    <MenuList/>
                </div>
                <div className="col-lg-8 mt-3">
               <p>{message}</p>
                            <table className="table table-bordered table-hover text-center">
                                <thead className="text-white table-dark text-small">
                                    <tr className="font">
                                        <th>S.No</th>
                                        <th>P.Name</th>
                                        <th>M.name</th>
                                        <th>Size</th>
                                        <th>A.Stock</th>
                                        <th>Price</th>
                                        <th><Link to="/addproducts">Add</Link></th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover">
                                {
                    product.map((xpro , index)=>{
                        return(
                                    <tr key={index}>
                                     <td>{xpro.id}</td>
                                        <td>{xpro.Pname}</td>
                                        <td>{xpro.Mname}</td>
                                        <td>{xpro.Size}</td>
                                        <td>{xpro.Stock}</td>
                                        <td>{xpro.Price}</td>
                                        <td><Link to="/addproducts"><i className="fa fa-plus fa-m"></i></Link></td>
                                        <td><Link to="/addproducts"><i className="fa fa-edit"></i></Link></td>
                                        <td><button onClick={deleteData.bind(this, xpro.id)}><i className="fa fa-trash fa-m"></i></button></td>
                                        </tr> 
                        )
                                    })          
                 }
                                </tbody>
                             </table>         
                     
                </div>
                <div className="col-lg-2"></div>
            </div>
                
        </div>
    )           
}
export default Jeans;
import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



const Tshorts = () => {

    const [product, updateProduct] = useState([]);
    const [error, updateError] = useState('');
    const [message, updateMessage] = useState();

    const getData = () => {

        let Url = "http://localhost:3002/Shorts";
        axios.get(Url)
            .then(response => updateProduct(response.data))

    }

    const deleteData = (pid) =>{
        axios.delete("http://localhost:3002/Shorts/"+pid)
        .then(response=>{
            updateMessage("Product Deleted successfully..")
            getData();
        })
        
    }


    useEffect(() => {
        getData();
        deleteData();
    }, [true])

    return (
        <div>
               
                            <table className="table table-bordered text-center">
                                <thead className="text-white table-dark text-small text-center">
                                <tr><th colSpan="9"><h6 className="text-center">Shorts</h6></th></tr>
                                    <tr className="font">
                                        <th>S.No</th>
                                        <th>P.Name</th>
                                        <th>M.name</th>
                                        <th>Size</th>
                                        <th>A.Stock</th>
                                        <th>Price</th>
                                        <th><Link to="/shortsform"><i className="fa fa-plus fa-m"></i></Link></th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="table-hover font">
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
                                        <td><Link to="/shorts"><i className="fa fa-plus fa-m"></i></Link></td>
                                        <td><Link to="/shorts"><i className="fa fa-edit"></i></Link></td>
                                        <td><button onClick={deleteData.bind(this, xpro.id)}><i className="fa fa-trash fa-m"></i></button></td>

                                        </tr> 
                        )
                                    })          
                 }
                                </tbody>
                                <tfooter>
                                    <p className="text-left" colSpan="8"> Seemore </p>
                                </tfooter>
                             </table>         
                     
                </div>
                
    )           
}
export default Tshorts;
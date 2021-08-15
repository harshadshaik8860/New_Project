import React from 'react';
import {Link} from 'react-router-dom';



const Data = (props)=>{

    const{ product} =props
    return(
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
                                <div className="col-lg-3">
                                <div className="card lcard">
                                <div className="card-header" key={index}>
                                    
                                </div>
                                <div className="card-body text-center">
                                    <p>P.name: {xpro.Pname}</p> 
                                    <p>Model : {xpro.Mname} </p>
                                    <p> Available Stock : {xpro.Stock}</p>
                                     <p>Price : {xpro.Price}</p>  
                                </div>
                                <div className="card-footer text-center">
                                   
                                </div>
                                
                            </div>
                            </div>
                            )
                        })
                    }
                    
                </div>
            

        </div>
        </div>
    )
}
export default Data;
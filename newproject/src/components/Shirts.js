import React from 'react'
import {Link} from 'react-router-dom';

 const Shirts=()=> {
    return (
        <div>
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
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                
                </div>
                <div className="card-footer"></div>
                </div>
            </div>
        </div>
       
        
    )
}
export default Shirts;
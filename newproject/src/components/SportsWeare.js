import React from 'react';
import {Link} from 'react-router-dom';

 const SportsWeare=()=> {
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
            <h1>Welocme to SportsWeare</h1>
        </div>
        </div>
    )
}
export default SportsWeare;
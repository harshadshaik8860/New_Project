import React from 'react';
import './dashboard.css';
import {Link}  from 'react-router-dom'


const MenuList = () =>{
    return(
        <div>
             <div className="text-center bg-dark rounded mt-3 ml-1">
                            <h4 className="text-white pt-2 pb-2"><Link className="list" to="/dashboard">Dashboard</Link></h4>
                        
                            <ul className="list-group">
                            <li> <Link className="list-group-item" to="/T-shirts">T-shirts</Link></li>
                            <li><Link className="list-group-item" to="/shirts">Shirts</Link></li>
                            <li><Link  className="list-group-item"to="/jeans">Jeans</Link></li>
                            <li><Link  className="list-group-item"to="/sportstshirts">Sports Tshirts</Link></li>
                            <li><Link  className="list-group-item"to="/shorts">Shorts</Link></li>
                            <li><Link  className="list-group-item"to="/shoes">Shoes</Link></li>
                            <li><Link  className="list-group-item"to="/sportsware">JSportsWeare</Link></li>
                            <li><Link className="list-group-item" to="/electronics">Electronics</Link></li>
                            </ul>
                    </div>
        </div>
    )
}
export default MenuList;
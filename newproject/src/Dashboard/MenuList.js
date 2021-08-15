import React from 'react';
import {Link}  from 'react-router-dom'

const MenuList = () =>{
    return(
        <div>
             <div className="text-center bg-dark rounded mt-3 ml-1">
                            <h4 className="text-white"><Link to="/dashboard">Dashboard</Link></h4>
                        
                            <ul className="list-group">
                            <li className="list-group-item"> <Link to="/dashboard/T-shirts">T-shirts</Link></li>
                            <li className="list-group-item"><Link to="/dashboard/shirts">Shirts</Link></li>
                            <li className="list-group-item"><Link to="/dashboard/jeans">Jeans</Link></li>
                            <li className="list-group-item"><Link to="/dashboard/sportstshirts">Sports Tshirts</Link></li>
                            <li className="list-group-item"><Link to="/dashboard/shorts">Shorts</Link></li>
                            <li className="list-group-item"><Link to="/dashboard/shoes">Shoes</Link></li>
                            <li className="list-group-item"><Link to="/dashboard/sportsware">JSportsWeare</Link></li>
                            <li className="list-group-item"><Link to="/dashboard/electronics">Electronics</Link></li>
                            </ul>
                    </div>
        </div>
    )
}
export default MenuList;
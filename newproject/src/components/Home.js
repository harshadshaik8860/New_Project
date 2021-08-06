import React from 'react'
import {useState} from 'react'
import { Link , Switch, Route, useParams} from 'react-router-dom';
import Geans from './Geans';
import SportsWeare from './SportsWeare';
import Shirts from './Shirts';
import Tshirts from './Tshirts';
import Header from './Header';





const Home = () => {
    const temp = {
        "photo":"1.jpg"
    };
    
    const [state, setState] = useState([temp]);
    return (
       <> <Header />

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
            <div className="col-lg-8 content"> 

                  
            
                
            </div>

            <div className="row background">
                <div className="col-lg-2">
                   <div className="card">

                   <div className="card-body">
                               welcome
                           </div>
                                
                   </div>
                </div>

                <div className="col-lg-2">
                   <div className="card">
                   <div className="card-body">
                               welcome
                           </div>    
                   </div>
                </div>

                <div className="col-lg-2">
                   <div className="card">
                       
                           <div className="card-body">
                               welcome
                           </div>
                                      
                   </div>
                </div>
            </div>
        </div>

        </>
    )
}
export default Home;
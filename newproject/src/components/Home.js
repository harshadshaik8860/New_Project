import React from 'react'
import {useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';





const Home = () => {
    

    const temp = {
        "photo":"1.jpg"
    };
    

    
    const [state, setState] = useState([temp]);
    const [cart , updateCartItem] = useState([]);
   
    const getCart = () =>{
        axios.get("http://localhost:3002/CartItems")
        .then(response=>{updateCartItem(response.data)
        })
    }

    useEffect (() => {
       
       getCart();
    }, [true])

    return (
       <> <Header cartitem={cart.length}/>

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
import React,{useState, useEffect ,useContext} from 'react'
import Header from './Header';
import axios from 'axios';
import Deatils from './Deatils';


const MyOrders = () => {
    
    
    const [cartitem, updateCartItem] = useState([]);
    const getCart = () => {
        axios.get("http://localhost:3002/CartItems")
            .then(response => {
                updateCartItem(response.data)

            })
    }
    const [orders , updateOrders] = useState([]);
    const getOrders = () =>{
        axios.get("http://localhost:3002/Myorders")
        .then(response=>{updateOrders(response.data)
           
        })
    }

    useEffect(()=>{
        getCart();
        getOrders();
    },[true])
    return (

        <div>
            <Header cartitem={cartitem.length}/>
           
                <div>
                <div className="mt-5">
           
           {
               orders.map((item, index) => {
                   return (
                       <div className="row">
                           <div className="col-lg-2"></div>
                           <div className="col-lg-8">
                               <div className="card">
                                   <div className="card-body">
                                       <div className="row" key={index}>
                                           <div className="col-lg-3">
                                               <div className="mb-2"> <lable>Product Name</lable></div>
                                               {item.Pname}
                                           </div>
                                           <div className="col-lg-2">
                                               <div className="mb-2"> <lable>Size</lable></div>
                                               {item.Size}

                                           </div>

                                           
                                           <div className="col-lg-3">
                                             <Deatils />
                                           </div>
                                           <div className="col-lg-2">
                                               <div className="mb-2">
                                                   <label>Price</label>
                                               </div>
                                               {item.Price}
                                           </div>


                                       </div>
                                   </div>
                               </div>
                           </div>
                           <div className="col-lg-2"></div></div>
                   )
               })
           }





       </div>
                </div>
        </div>
    )
}

export default MyOrders

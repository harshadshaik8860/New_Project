import React ,{useEffect, useState}from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Geans from './Geans';



const Header = (props)=>{
//   const [cart , updateCartItem] = useState([]);

//   const getCart = () =>{
//     axios.get("http://localhost:3002/CartItems")
//     .then(response=>{updateCartItem(response.data)
//     })
// }

// useEffect(() => {
//    getCart();
// }, [true])



  return(
      <>
    
    <ul className="nav  justify-content-end" sticky="top">
      <li className="list"> <Link className="link active" to="/">Home</Link> </li>
      <li className="list"> <Link className="link" to="/newarraivals">New Arraivals</Link> </li>
      <li className="list"> <Link className="link" to="/availablestock">AvailableStock</Link> </li>
      <li className="list"> <Link className="link" to="/myorders">MyOrders</Link> </li>
      <li className="list"> <Link className="link" to="/mycart">MyCart({props.cartitem})</Link> </li>
      {/* <li className="list"> <Link className="link" to="/register">Login/Register</Link> </li> */}
       <li className="list" onClick={logout}><Link to ="" className="link"> Welocom {localStorage.getItem("userfname")} - logout </Link></li>
    </ul>
    
    </>
  
  )
  

}
const logout = ()=>{
  localStorage.clear()
  let url = "http://localhost:3000/#/";
  window.location.reload(url)
}
export default Header;
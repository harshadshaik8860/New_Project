import React from 'react';
import {Link ,HashRouter, Route} from 'react-router-dom';



const Header = ()=>{

  return(
      <>
    
    <ul className="nav  justify-content-end" sticky="top">
      <li className="list"> <Link className="link active" to="/">Home</Link> </li>
      <li className="list"> <Link className="link" to="/newarraivals">New Arraivals</Link> </li>
      <li className="list"> <Link className="link" to="/availablestock">AvailableStock</Link> </li>
      <li className="list"> <Link className="link" to="/oldstock">OldStock</Link> </li>
      <li className="list"> <Link className="link" to="/addstock">Add stock</Link> </li>
      <li className="list"> <Link className="link" to="/register">Login/Register</Link> </li>
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
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route , Link} from 'react-router-dom';
import Login from './Accounts/Login';
import Admin from './Accounts/Admin';
import RegisterForm from './Forms/Registerform';
import AdminLogin from './Accounts/AdminLogin';
import AdminRoute from './Routes/AdminRoute';
import UserRoute from './Routes/UserRoute';



const App = ()=>{

  if(localStorage.getItem("useremail")===null){
    var user =
    <>
    <Route exact path="/" component={Login}/>
     <Route exact path="/register" component={RegisterForm}/>
     
    </>}
    else{
      var user =
      <UserRoute/>
    }

    if(localStorage.getItem("userid")===null){
      var admin =
      <>
      <Route exact path="/adminlogin" component={AdminLogin}/>
        <Route exact path="/admin" component={Admin}/>
      </>
    }
    else{
      var admin =
      <AdminRoute/>
    }
    
  
  return(
  <Router>
    
   {user}
   {admin}
     </Router>
  )
 
}
export default App;
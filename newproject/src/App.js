import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Route , Link} from 'react-router-dom';
import Header from './components/Header';
import Geans from './components/Geans';
import SportsWeare from './components/SportsWeare';
import Shirts from './components/Shirts';
import Tshirts from './components/Tshirts';
import Home from './components/Home';
import AddStock from './components/AddStock';
import NewArraivals from './components/NewArraivals';
import AvailableStock from './components/AvailableStock';
import OldStock from './components/OldStock';
import Login from './Accounts/Login';
import Register from './Accounts/Register';
import Dashboard from './Dashboard/Dashboard'
import Admin from './Accounts/Admin'
import RegisterForm from './Forms/Registerform';



const App = ()=>{

  if(localStorage.getItem("useremail")===null){
   var redirect= <>
    <Route exact path="/" component={Login}/>
    <Route exact path="/register" component={Register}/>
   
      </>
  }else{
    var redirect=
    <>
    <Route  path="/" component={Header}/>
    <Route  path="/home" component={Home}/>
    <Route path="/register" component={RegisterForm}/>
   </>
  // if(localStorage.getItem("userid")===null){
  //   var redirect=
  //   <>
  //   <Route exact path="/" component={Login}/>
  //   <Route exact path="/admin" component={Admin}/>
    
  //   </>
  // }else{
  //   var redirect=
  //   <>
  //   <Route  path="/dashboard" component={Dashboard}/></>
  // }
  }
  return(
  <Router>
   {redirect}
     </Router>
  )
 
}
export default App;
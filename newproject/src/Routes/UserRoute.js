import React from 'react';
import {HashRouter as Router, Route , Link} from 'react-router-dom';
import Geans from '../components/Geans';
import SportsWeare from '../components/SportsWeare';
import Shirts from '../components/Shirts';
import Tshirts from '../components/Tshirts';
import Home from '../components/Home';
import NewArraivals from '../components/NewArraivals';
import AvailableStock from '../components/AvailableStock';
import Dashboard from '../Dashboard/Dashboard'
import RegisterForm from '../Forms/Registerform';
import MyOrders from '../components/MyOrders';
import MyCart from '../components/MyCart';
import Deatils from '../components/Deatils';
import Parent from '../components/parent';
import Child from '../components/child';
import ParentClass from '../components/ParentClass';
import ChildClass from '../components/ChildClass';

const UserRoute = ()=>{  
     
    return(
        <div>
    <Route exact path="/" component={Home}/>
     <Route exact path="/mycart" component={MyCart}/>
     <Route exact path="/newarraivals" component={NewArraivals}/>
     <Route exact path="/availablestock" component={AvailableStock}/>
     <Route exact path="/myorders" component={MyOrders}/>
     <Route exact path="/register" component={RegisterForm}/>
     <Route path="/home/tshirts" component={Tshirts}/>
     <Route path="/home/shirts" component={Shirts}/>
     <Route path="/home/geans" component={Geans}/>
     <Route path="/home/sportsweare" component={SportsWeare}/>
     <Route exact path="/parent" component={Parent}/>
  <Route exact path="/child" component={Child}/>
  <Route exact path="/parentclass" component={ParentClass}/>
  <Route exact path="/childclass" component={ChildClass}/>
    
     {/* <Route path="/Details" component={Deatils}/> */}
     
     </div>
    )
}
export default UserRoute;
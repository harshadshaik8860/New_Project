import React from 'react';
import {HashRouter as Router, Route , Link} from 'react-router-dom';
import Geans from '../components/Geans';
import SportsWeare from '../components/SportsWeare';
import Shirts from '../components/Shirts';
import Tshirts from '../components/Tshirts';
import Home from '../components/Home';
import AddStock from '../components/AddStock';
import NewArraivals from '../components/NewArraivals';
import AvailableStock from '../components/AvailableStock';
import OldStock from '../components/OldStock';
import Dashboard from '../Dashboard/Dashboard'
import RegisterForm from '../Forms/Registerform';

const UserRoute = ()=>{  
     
    return(
        <div>
    <Route exact path="/" component={Home}/>
     <Route exact path="/addstock" component={AddStock}/>
     <Route exact path="/newarraivals" component={NewArraivals}/>
     <Route exact path="/availablestock" component={AvailableStock}/>
     <Route exact path="/oldstock" component={OldStock}/>
     <Route exact path="/register" component={RegisterForm}/>
     <Route path="/home/tshirts" component={Tshirts}/>
     <Route path="/home/shirts" component={Shirts}/>
     <Route path="/home/geans" component={Geans}/>
     <Route path="/home/sportsweare" component={SportsWeare}/>
     <Route  path="/dashboard" component={Dashboard}/>
     </div>
    )
}
export default UserRoute;
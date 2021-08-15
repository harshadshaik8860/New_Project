import React from 'react';
import {HashRouter as Router, Route , Link} from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard'
import Jeans from '../Dashboard/Jeans';
import AddProducts from '../Forms/AddProduct';
import Tshirts from '../Dashboard/T-shirts';
import TshirtForm from '../Forms/TshirtForm';
import Shirts from '../Dashboard/Shirts';
import ShirtsForm from '../Forms/ShirtsForm';
import ShoesForm from '../Forms/ShoesForm';
import ShortsForm from '../Forms/ShortsForm';
import SportsTshirtsForm from '../Forms/SportsTshirtsForm';
import SportswareForm from '../Forms/SportswareForm';
import ElectronicsForm from '../Forms/ElectronicsForm';
import Sheos from '../Dashboard/Shoes';
import Shorts from '../Dashboard/Shorts';
import SportsTshirts from '../Dashboard/SportsTshirts';
import SportsWare from '../Dashboard/SportsWare';
import Electronics from '../Dashboard/Electronics';


const AdminRoute = () =>{
    return(
        <div>
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route exact path="/dashboard/jeans" component={Jeans}/>
            <Route exact path="/addproducts" component={AddProducts}/>
            <Route exact path="/dashboard/T-shirts" component={Tshirts}/>
            <Route exact path="/tshirts" component={TshirtForm}/>
            <Route exact path="/dashboard/shirts" component={Shirts}/>
            <Route exact path="/shirts" component={ShirtsForm}/>
            <Route exact path="/dashboard/shoes" component={Sheos}/>
            <Route exact path="/shoes" component={ShoesForm}/>
            <Route exact path="/dashboard/shorts" component={Shorts}/>
            <Route exact path="/shorts" component={ShortsForm}/>
            <Route exact path="/dashboard/sportstshirts" component={SportsTshirts}/>
            <Route exact path="/sportstshirts" component={SportsTshirtsForm}/>
            <Route exact path="/dashboard/sportsware" component={SportsWare}/>
            <Route exact path="/sportsware" component={SportswareForm}/>
            <Route exact path="/dashboard/electronics" component={Electronics}/>
            <Route exact path="/electronics" component={ElectronicsForm}/>
        </div>
        
    )
}
export default AdminRoute;
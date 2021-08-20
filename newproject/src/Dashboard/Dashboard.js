import React from 'react';
import './dashboard.css';
import {Link} from 'react-router-dom';
import MenuList from './MenuList';
import Jeans from './Jeans';
import Logout from './Logout';
import Tjeans from '../Tables/Tjeans';
import Tshirts from '../Tables/Tshirts';
import TaShirts from '../Tables/TaShirts';
import Tshorts from '../Tables/Tshorts';
import TShoes from '../Tables/Tshoes';
import Tsports from '../Tables/Tsports';
import TsportsTshirts from '../Tables/TsportsTshirts';
import TElectronics from '../Tables/Telectronics';



const Dashboard =(props)=> {
    return (
        <div>
            <Logout />
            <div className="row">
                <div className="col-2">
                       <MenuList/>
                </div>
                <div className="col-8">
                     <div className="row mt-3">
                         <div className="col-lg-6">
                         <Tjeans/>
                         </div>
                         <div className="col-lg-1"></div>

                         <div className="col-lg-5">
                         <Tshirts/>
                         </div>
                     </div>

                     <div className="row mt-3">
                         <div className="col-lg-6">
                             <p>{props.message}</p>
                         <TaShirts />
                         </div>
                         <div className="col-lg-1"></div>

                         <div className="col-lg-5">
                         <Tshorts />
                         </div>
                     </div>

                     <div className="row mt-3">
                         
                         <div className="col-lg-6">
                         <TShoes />
                         </div> 
                         
                         <div className="col-lg-1"></div>

                         <div className="col-lg-5">
                         <Tsports />
                        
                        </div>
                     </div>
                     <div className="row mt-3">
                         <div className="col-lg-6">
                         <TsportsTshirts />
                         </div>
                         <div className="col-lg-1"></div>

                         <div className="col-lg-5">
                             <p>{props.message}</p>
                         <TElectronics />
                         </div>
                     </div>
                     
                </div>
                
            </div>
            
        </div>
    )
}

export default Dashboard
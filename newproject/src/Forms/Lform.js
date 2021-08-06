import {Link } from 'react-router-dom';
import { useState } from 'react';
import Login from '../Accounts/Login';

const Lform = (props)=>{

    
   

    return(
        
        <div className="Loginbg">
                <form onSubmit={props.login} className="form">
                    
                    <div className="row"> 
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4">
                            <p className="text-danger text-center bg-white">{props.mes}</p>
                    <p className="text-success text-center bg-white">{props.message}</p>
                    <p className="text-danger text-center bg-white">{props.message1}</p>

                        <div className="card rounded bg-light">
                            <div className="card-header text-white bg-warning text-center"> Login </div>
                            <div className="row">
                        <div className="col-lg-12">
                            <div className="card-body">
                                <label>Email <i className="text-danger">*</i></label>
                                <input type="email" 
                                placeholder="Enter email id" 
                                name="email"
                                onChange={props.ProcessInput}
                                value={props.name}
                                className="form-control" />
                                <small className="text-danger">{props.Merror}</small>
                               
                                
                            </div>
                            </div>
                            </div>

                            <div className="row form-group">
                        <div className="col-lg-12">
                            <div className="card-body">
                                <label>Password <i className="text-danger">*</i></label>
                                <input type="password" 
                                placeholder="Enter Password"
                                 name="password"
                                 value={props.name}
                                onChange={props.ProcessInput} 
                                className="form-control" />
                                <small className="text-danger">{props.Perror}</small>
                                
                            </div>
                            </div>
                            </div>
                            <div className="card-footer text-center bg-warning">
                                <button type="submit" className="btn btn-info bg-primary text-white">Login</button>
                                <hr/>
                               <small className="text-center text-primary"><Link to="/adminlogin">Login As Admin?Click here</Link><Link to="/register"> New User? Register!</Link></small>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4"></div>
                   
                    </div>
                    </form>
                </div>
            
    )
}
export default Lform;
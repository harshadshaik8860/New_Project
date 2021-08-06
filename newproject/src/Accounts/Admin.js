import React, {useRef} from 'react';
import { useForm } from "react-hook-form";
import { useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../Accounts/Admin.css';


 const Admin =()=> {

    const { register, handleSubmit, formState: { errors}, watch  } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    // const [userinfo , updateUserinfo] = useState("");
    const [message , updatMessage] = useState("");

     
    const onSubmit =(data)=>{
       
        let userinfo = data
        let URL = "http://localhost:3001/admis"
        axios.post(URL , userinfo)
       .then(response=>updatMessage("Register sucessfully..."))
       let url = "http://localhost:3000/#/"
    window.location = url
    }


    return (
     <div className="Regi">
            <form onSubmit={handleSubmit(onSubmit)} className="forms">
                <p className="text-success text-center">{message}</p> 
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="card card-rounded">
                            <div className="card-header bg-info">
                                <p className="text-center text-white ">Admin Register</p>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="name" >Name</label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Enter name"
                                        className="form-control" 
                                        {...register("name", {required: true })}
                                    />
                                   {errors.name?<p className="text-danger">Name is required!</p>:null} 
                                </div>
                                
                                
                                <div className="form-group">
                                    <label htmlFor="userid">User Id</label>
                                    <input type="text"
                                        name="userid"
                                        placeholder="Enter userid"
                                        className="form-control"
                                        {...register("userid",{ required: true, 
                                                                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~])/ , 
                                                                maxLength: 10,
                                                                minLength: 6})}
                                        
                                    />
                                    {errors.userid?.type === "required" && <p className="text-danger">Userid is required!</p>}
                                    {errors.userid?.type === "pattern" && (<p className="text-danger">userid Required"[0-9]"and Upper caese and lower case and special chr</p>)}
                                    {errors.userid?.type === "maxLength" && (<p className="text-danger">User id not morethan 10 Char</p>)}
                                    {errors.userid?.type === "minLength" && (<p className="text-danger">User id not lessthan 6 Char</p>)}

                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">Email id</label>
                                    <input type="email"
                                       name="email"
                                        placeholder="Enter email"
                                        className="form-control"
                                        {...register( "email",{required:true,
                                                                pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
                                    />
                                    {errors.email?.type==="required" && <p className="text-danger">Email is required!</p>}
                                    {errors.email?.type==="pattern" && <p className="text-danger">Invalid Email Id!</p>}

                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="mobile"
                                       name="mobile"
                                        placeholder="Enter Mobile number"
                                        className="form-control"
                                        {...register("mobile",{required: true,
                                                                maxLength: 10,
                                                                minLength:10})}
                                    />
                                    {errors.mobile?.type==="required" &&<p className="text-danger">Mobile is required!</p>}
                                    {errors.mobile?.type==="maxLength" && <p className="text-danger">Mobile Number not exceed morethan 10 numbers</p>}
                                    {errors.mobile?.type==="minLength" && <p className="text-danger">Mobile Number not lessthan 10 numbers</p>}

                                </div>
                               
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="text"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter password"
                                        {...register("password",{required: true,
                                                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/,
                                                                maxLength :15,
                                                                minLength: 10,
                                                                })}
                                    />
                                    {errors.password?.type==="required" && <p className="text-danger">Password is required!</p>}
                                    {errors.password?.type==="pattern" && <p className="text-danger">Password should have Spl Char ,Upper, lower, Alpa numaric, number!</p>}
                                    {errors.password?.type==="maxLength" && <p className="text-danger">Password Should not excced 15 Char</p>}
                                    {errors.password?.type==="minLength" && <p className="text-danger">Password not lessthan 10 Chra</p>}


                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="repassword">Re-enter Password</label>
                                     <input type="password"
                                        name="repassword"
                                        placeholder="Re-password"
                                        className="form-control"
                                      {...register("repassword", {required: true,
                                                                        validate: ( value )=> value === password.current
                                        })}
                                    />
                                    {errors.repassword?.type==="required" && <p className="text-danger">re-Password is required!</p>}
                                    {errors.repassword?.type==="validate" && <p className="text-danger">Re Password should match with Password</p>}

                                </div>
                                
                            </div>
                            <div className="card-footer text-center bg-info">
                                <button  type="submit" className="btn btn-primary btn-m ">Register</button>
                                <hr/>
                                <small className="text-white"><Link to="/adminlogin">Already Register? Login!</Link></small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </form>
        </div>
    )
}
export default Admin;
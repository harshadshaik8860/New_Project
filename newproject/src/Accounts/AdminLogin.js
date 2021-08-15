import React, { useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';

const AdminLogin =()=> {
    
    const [message , updateMessage] = useState();
    const [message1 , updateMessage1] = useState();
    const { register, handleSubmit, formState: {errors},} = useForm();

    const login = (data)=>{
    
    let loginStatus = false;
    let formStatus = true;
    let password= data.password ;
    let userid = data.userid ;

     if(formStatus===true){
   
        let url = "http://localhost:3001/admis";
        axios.get(url).then(response=>{
            for(var i=0; i<response.data.length; i++){
            if(userid==response.data[i].userid && password==response.data[i].password){
                localStorage.setItem("name", response.data[i].name);
                localStorage.setItem("userid", response.data[i].userid);
                loginStatus= true;
                break;
            }
        }
            if(loginStatus==true){
                updateMessage("Please wait Logining in ...!");
                window.location.href="http://localhost:3000/#/dashboard";
                window.location.reload();
            }else{
                updateMessage1("invalid Credentails..!")
            }
        })
    }
}
    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <div className="row mt-5">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <p className="text-success text-center">{message}</p>
                        <p className="text-danger text-center">{message1}</p>
                    <div className="card-rounded borderd">
                        <div className="card-header bg-info">
                            <h6 className="text-center text-white">Admin Logiin</h6>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>UserId</label>
                                <input type="text"
                                        name="userid"
                                        placeholder="enter userid"
                                        className="form-control"
                                        {...register("userid",{required:true ,
                                                                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~])/})}
                                        />
                                    {errors.userid?.type==="required" && (<p>Please Enter userid !</p>)}
                                    {errors.userid?.type==="pattern" && (<p>Please valid userid !</p>)}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"
                                        name="password"
                                        placeholder="enter userid"
                                        className="form-control"
                                        {...register("password",{required:true,
                                                                pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/})}
                                        />
                                    {errors.password?.type==="required" && <p>Please Enter password!</p>}
                                    {errors.password?.type==="pattern" && <p>Please Enter valid password !</p>}
                            </div>
                        </div>
                        <div className="card-footer text-center bg-info">
                            <button type="submit" className="btn btn-inf btn-m">Login</button>
                            <hr/>
                            <small className="text-white text-center"><Link to="/">Login as User? Click here!</Link> <Link to="/admin">New user? Register here!</Link></small>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>

            </form>
            
        </div>
    )
}
export default AdminLogin;
import Register from "../Accounts/Register";
import {Link} from 'react-router-dom'
import '../Accounts/Register.css'
import Header from "../components/Header";

const RegisterForm = (props) => {

 const  {message , saveData, mes1, message1, processInput} = props
    return(
      
        <div className="Ref">
            <Header/>
            <div>
                <form onSubmit={saveData} className="form">
                <p className="text-danger text-center">{message}</p>
                <p className="text-success text-center">{mes1}</p>              
                <div className="row">
                    
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="card rounded">
                            <div className="card-header text-center bg">
                                Register
                            </div>
                            <div className="card-body">
                            <p className="text-danger text-center">{message1}</p>
                            <div className="row form-group">

                                <div className="col-lg-4">
                                    <label>First Name<i className="text-danger">*</i></label>
                                    <input type="text" 
                                    placeholder="Enter First name" 
                                    name="userfname"
                                    autoFocus
                                    onChange={props.processInput}
                                    value={props.name}
                                    className="form-control form-control-sm"/>
                                    <small className="text-danger">{props.fnameerror}</small>
                                </div>

                                <div className="col-lg-4">
                                    <label>Middle Name</label>
                                    <input type="text" 
                                    placeholder="Enter Middle name"
                                    name="usermname"
                                    onChange={props.processInput}
                                    value={props.name} 
                                    className="form-control form-control-sm"/>
                                    
                                </div>


                                <div className="col-lg-4">
                                <label>Last Name<i className="text-danger">*</i></label>
                                    <input type="text"
                                    placeholder="Enter Last name"
                                    name="userlname"
                                    onChange={props.processInput}
                                    value={props.name}
                                     className="form-control form-control-sm"/>
                                     <small className="text-danger">{props.lnameerror}</small>
                                </div>
                                </div>

                                <div className="row form-group">
                                <div className="col-lg-12">
                                    <label>Email ID<i className="text-danger">*</i></label>
                                    <input type="email" 
                                    placeholder="Enter Email Id" 
                                    name="useremail"
                                    onChange={props.processInput}
                                    value={props.name}
                                    className="form-control form-control-sm"/>
                                    <small className="text-danger">{props.emailerror}</small>
                                </div>
                                </div>

                                <div className="row form-group">
                                <div className="col-lg-6">
                                    <label>Mobile No<i className="text-danger">*</i></label>
                                    <input type="number"
                                     placeholder="Enter Mobile Numer" 
                                     name="usermobile"
                                    onChange={props.processInput}
                                    value={props.name}className="form-control form-control-sm"/>
                                    <small className="text-danger">{props.mobileerror}</small>
                                </div>
                                </div>

                                <div className="row form-group">
                                <div className="col-lg-6">
                                    <label>Password<i className="text-danger">*</i></label>
                                    <input type="text" 
                                    placeholder="Enter password" 
                                    name="userpassword"
                                    onChange={props.processInput}
                                    value={props.name}
                                    className="form-control form-control-sm"/>
                                    <small className="text-danger">{props.passworderror}</small>
                                </div>
                                <div className="col-lg-6">
                                    <label>Re-enter Password<i className="text-danger">*</i></label>
                                    <input type="password" 
                                    placeholder="Re-enter Password" 
                                    name="userrpass"
                                    onChange={props.processInput}
                                    value={props.name}
                                    className="form-control form-control-sm"/>
                                    <small className="text-danger">{props.rpasserror}</small>
                                </div>
                                </div>

                                <div className="row form-group">
                                <div className="col-lg-3">
                                    <label>Gender<i className="text-danger">*</i></label>
                                </div>
                                    
                                <div className="col-lg-9">
                                <div className="row form-group">
                                
                                <div class="col-lg-6"><input type="radio" value="Male" name="gender"  onChange={props.processInput} class="mr-3"/> Male</div>
								<div class="col-lg-6"><input type="radio" value="female" name="gender"   onChange={props.processInput}class="mr-3"/> FeMale</div>
                                </div>
                                <small className="text-danger">{props.merror}</small>
                                </div>
                                
                                </div>
                           

                    <div className="row form-group">
                                <div className="col-lg-3">
                                    <label>DOB<i className="text-danger">*</i></label>
                                    </div>
                        <div className="col-lg-4">
                                    <input type="date"
                                    name="userdob"
                                    onChange={props.processInput}
                                    value={props.name}
                                     className="form-control form-control-sm"/>
                                     <small className="text-danger">{props.doberror}</small>
                                </div>
                                </div>

                                <div className="row form-group mt-4">
                                        <div className="col-lg-12">
                                        <label> Address:</label>
                                    </div>
                                    </div>
                                    <div className="row form-group">
                                <div className="col-lg-6">
                                    <label>House No<i className="text-danger">*</i></label>
                                    <input type="text" 
                                    placeholder="House/Flat No" 
                                    name="userhno"
                                    onChange={props.processInput}
                                    value={props.name}
                                    className="form-control form-control-sm"/>
                                    <small className="text-danger">{props.hnoerror}</small>
                                </div>
                                <div className="col-lg-6">
                                    <label>Area/LandMark<i className="text-danger">*</i></label>
                                    <input type="text" 
                                    placeholder="Area and Landmark" 
                                    maxLength="50"
                                    name="userarea"
                                    onChange={props.processInput}
                                    value={props.name}
                                     className="form-control form-control-sm"/>
                                     <small className="text-danger">{props.areaerror}</small>
                                </div>
                                </div>

                                <div className="row form-group">
                                <div className="col-lg-4">
                                    <label>City<i className="text-danger">*</i></label>
                                    <input type="text" 
                                    placeholder="City Name" 
                                    name="usercity"
                                    onChange={props.processInput}
                                    value={props.name}
                                    className="form-control form-control-sm"/>
                                    <small className="text-danger">{props.cityerror}</small>
                                </div>
                                <div className="col-lg-4">
                                    <label>Pincode<i className="text-danger">*</i></label>
                                    <input type="text"
                                    placeholder="Pincode" 
                                    maxLength="50"
                                    name="userpin"
                                    onChange={props.processInput}
                                    value={props.name}
                                     className="form-control form-control-sm"/>
                                     <small className="text-danger">{props.pinerror}</small>
                                </div>
                                </div>
                                <div className="form-group">
                               <small>
                                   <input type="checkbox" 
                                   name="terms"
                                   onChange={props.processInput}
                                   value1={props.name}
                                   value="accepted"
                                   className="mr-4" /><i className="text-danger">*</i> I've accept the Term's and conditions
                               </small>
                               <br/>
                               <small className="text-danger">{props.termserror}</small>
                               </div>
                             </div>
                             </div>
                            <div className="card-footer text-center bg">
                                <button type="submit" className="btn btn-primary btn-m">Save</button>
                                <hr/>
                                <small className="text-center text-white bg1">
                               <Link to="/">Already've account?Login</Link> 
                            </small>
                            </div>
                     </div>
                    <div className="col-lg-3"></div>
                </div>
                </form> 
                </div>   
            </div>
           
    );
}
export default RegisterForm;
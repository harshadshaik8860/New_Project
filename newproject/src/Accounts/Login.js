import axios from 'axios';
import './login.css'
import Lform from '../Forms/Lform';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class Login extends Component {
     constructor(props){
         super(props);
         this.state={
             fields:{},
             errorList:{}
             
             
            
         }
     }

     ProcessInput = (obj) =>{
         let fields= this.state.fields;
         fields[obj.target.name] = obj.target.value;
         this.setState({
            fields
         })
         
     }

     login =(obj)=>{
         obj.preventDefault();
         let fields = this.state.fields;
         let errorList = this.state.errorList;
         let formStatus = true;
         
         let epattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
         let ppattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;
         // /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
         let mes ='';
         let message='';
         let message1=''
         
if(formStatus==true){

         if(!fields["email"]){
            formStatus = false;
            errorList["Merror"] = "Please Enter email id ..!"
            mes ="Please filled the Highlighted fields!"
         } else{
            errorList["Merror"] ="";

             if(fields["email"]==""){
            formStatus = false;
            errorList["Merror"] = "Please Enter email id ..!";
            mes ="Please filled the Highlighted fields!"
         } else{
            errorList["Merror"] ="";
         } 
        }

         if(!fields["password"]){
            formStatus = false;
            errorList["Perror"] = "Please Enter Password...!";
            mes ="Please filled the Highlighted fields!"
         }else{
            errorList["Perror"] ="";
         
         if(fields["password"]==""){          
            formStatus = false;  
            
            errorList["Perror"] = "Please Enter Password...!";
             mes ="Please filled the Highlighted fields!"
         }else{
            errorList["Perror"] ="";
                
         if(!epattern.test(fields["email"])){
             formStatus = false;
             errorList["Merror"] = "Please enter valid Email!";
             mes="Invalid Data.."
            
         }else{
            errorList["Merror"]="";
            
         if(!ppattern.test(fields["password"])){
            formStatus = false;
            errorList["Perror"]= " please Enter valid password!"
            mes="Invalid Data.."
             
         }else{
            errorList["Perror"]="";
           
         }
        }
    }}

        }else{
            
        }
        this.setState({
         fields,
         errorList,
         mes,
         message,
         message1
           
       })

       let loginStatus = false;
       let email= this.state.fields.email;
       let password= this.state.fields.password;


       if(formStatus===true){
          var url = "http://localhost:3001/usersData";
          axios.get(url).then(response=>{
             for(var i=0; i<response.data.length; i++){
                if(email==response.data[i].useremail && password==response.data[i].userpassword){
                   localStorage.setItem("userfname", response.data[i].userfname);
                   localStorage.setItem("useremail", response.data[i].useremail);
                   loginStatus= true;
                   break;
                }
             }
             if(loginStatus==true){
               this.setState({message:"Please Wait logging in...!"});
            //   let url="http://localhost:3000/#/"
               window.location.reload();
             }else{
               this.setState({message1:"User Not found...!"})
             }
          })

      }
   }
     // if((this.state.fields["email"]=="userid")  && (this.state.fields["password"]=="password")){
            
        //     let Url = "http://localhost:3003/admis" 
        //     axios.post(Url)
        //     .then(response=>)
           
        // }else{
        //     this.setState({
        //         mes = "Invalid Credentials..."
        //     })

        // }


    render() {
        return (
           
            
            <Lform 
            login={this.login} 
            mes={this.state.mes} 
            ProcessInput={this.ProcessInput.bind(this)} 
            Merror={this.state.errorList.Merror}
            Perror={this.state.errorList.Perror}
            message={this.state.message}
            message1={this.state.message1}
            name={this.state.name}
            />

            // <div className="Loginbg">
            //     <form onSubmit={this.login}>
            //         <p className="text-danger text-center">{this.state.mes}</p>
            //         <div className="row"> 
            //                 <div className="col-lg-4"></div>
            //                 <div className="col-lg-4">
            //             <div className="card rounded bg-light">
            //                 <div className="card-header text-white bg-warning text-center"> Login </div>
            //                 <div className="row">
            //             <div className="col-lg-12">
            //                 <div className="card-body">
            //                     <label>Email <i className="text-danger">*</i></label>
            //                     <input type="text" 
            //                     placeholder="Enter email id" 
            //                     name="email"
            //                     onChange={this.ProcessInput}
            //                     className="form-control" />
            //                     <small className="text-danger">{this.state.errorList.Merror}</small>
                                
            //                 </div>
            //                 </div>
            //                 </div>

            //                 <div className="row form-group">
            //             <div className="col-lg-12">
            //                 <div className="card-body">
            //                     <label>Password <i className="text-danger">*</i></label>
            //                     <input type="text" 
            //                     placeholder="Enter Password"
            //                     name="password"
            //                     onChange={this.ProcessInput} 
            //                     className="form-control" />
            //                     <small className="text-danger">{this.state.errorList.Perror}</small>
                                
            //                 </div>
            //                 </div>
            //                 </div>
            //                 <div className="card-footer text-center bg-warning">
            //                     <button type="submit" className="btn btn-info bg-primary text-white">Login</button>
            //                     <hr/>
            //                    <small className="text-center text-primary"><Link to="/register"> New User? Register!</Link></small>
            //                 </div>
            //             </div>
            //             </div>
            //             <div className="col-lg-4"></div>
                   
            //         </div>
            //         </form>
            //     </div>
            
        )
    }
}

export default Login;

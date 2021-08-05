import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Register.css'
import Registerform from '../Forms/Registerform';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            userData:{},
            errorData:{},
            message:'',
            message1:''
           
            
        }
    }


    processInput = (obj) =>{
        let userData = this.state.userData;
        userData[obj.target.name]=obj.target.value;
        this.setState({
            userData
        })
    }

    saveData = (obj) =>{
        obj.preventDefault();
        let userData = this.state.userData;
        let errorData = this.state.errorData;
        let formStatus = true;

        if (!userData["userfname"] || userData["userfname"]=="") {
            formStatus = false;
            errorData["fnameerror"] = "Please Enter  Firts Name!"
        }else{
            
            errorData["fnameerror"] = ""
        }
    
        if(!userData["userlname"] || userData["userlname"]==""){
            formStatus = false;
            errorData["lnameerror"] = "Please Enter  Last Name!";
        }else{
            
             errorData["lnameerror"] = ""
        }

       if (!userData["useremail"] || userData["useremail"]==""){
            formStatus = false;
            errorData["emailerror"] = "Please Enter Email Id!";
            
       }else{
        
        errorData["emailerror"] = "";

       }

        if(!userData["usermobile"] || userData["usermobile"]==""){
            formStatus = false;
            errorData["mobileerror"] = "Please Enter Mobile No!";
        }else{

            
            errorData["mobileerror"] = ""; 
        }

        if(!userData["userpassword"] || userData["userpassword"]==""){
            formStatus = false;
            errorData["passworderror"] = "Please Enter Password!";
        }else{
           
            errorData["passworderror"] = "";
        }

        if(!userData["userrpass"] || userData["userrpass"]==""){
            formStatus = false;
            errorData["rpasserror"] = "Please Re-Enter Password!";
        }else{
            
             errorData["rpasserror"] = "";

        }

        if(!userData["userdob"] || userData["userdob"]==""){
            formStatus = false;
            errorData["doberror"] = "Please Enter DOB!";
           
        }else{
           
            errorData["doberror"] = "";
        }

        if(!(userData["userm"]) && (userData["userf"]=="")){
            formStatus = false;
            errorData["merror"] = "Please select the gender!";
        }else{
             
             errorData["merror"] = "";
            

        }
        // (!userData["userf"] || userData["userf"]=="") &&
        if(!userData["userhno"] || userData["userhno"]=="") {
            formStatus = false;
            errorData["hnoerror"] = "Please Enter House No!";
           
        }else{
           
        errorData["hnoerror"] = "";

        }
       if (!userData["userarea"] || userData["userarea"]==""){
        formStatus = false;
        errorData["areaerror"] = "Please Enter area!";
        
       }else{
        
         errorData["areaerror"] = "";
       }
       if (!userData["usercity"] || userData["usercity"]==""){
        formStatus = false;
        errorData["cityerror"] = "Please Enter City Name!;";
        
       }else{
        
            errorData["cityerror"] = ""; 
       }
        if(!userData["userpin"] || userData["userpin"]==""){
            formStatus = false;
            errorData["pinerror"] = "Please Enter Pincode!";
        
        }else{
            
            errorData["pinerror"] = "";
        }

        if(!userData["terms"]==""){
            formStatus = false;
            errorData["termserror"]= "Please accept the term's!";
        }else{
           
            
            errorData["termserror"] = ""
            
        }

        let msg ="";
        if(formStatus==false){
            msg="please fill the Highlighted fields";
        }else{
            msg=''
        }

        this.setState({
            errorData,
            message : msg
        })


        let mes='';
        if(formStatus===true){
              let Url = "http://localhost:3001/usersData";
            let input = this.state.userData;
            axios.post(Url, input)
            .then(response=>{
                this.setState({
                    userData:{},
                    errorData:'',
                    mes1 : "data submited sucessfully..!",
                    message:'',
                    name:""
                })
            })
            this.setState({
                message1:mes
            })
            
        }else{
           
            formStatus= false;
            mes = " invalid Data ..!"
        }
        
    }
    render() {
        return (
            <Registerform 
            message={this.state.message}
            mes1={this.state.mes1}
            saveData={this.saveData}
            message1={this.state.message1}
           processInput= {this.processInput.bind(this)}
           fnameerror={this.state.errorData.fnameerror}
           emailerror={this.state.errorData.emailerror}
           lnameerror={this.state.errorData.lnameerror}
           mobileerror={this.state.errorData.mobileerror}
           passworderror={this.state.errorData.passworderror}
           rpasserror={this.state.errorData.rpasserror}
           merror={this.state.errorData.merror}
           doberror={this.state.errorData.doberror}
           hnoerror={this.state.errorData.hnoerror}
           areaerror={this.state.errorData.areaerror}
           cityerror={this.state.errorData.cityerror}
           pinerror={this.state.errorData.pinerror}
           termserror={this.state.errorData.termserror}
           name={this.state.name}
           
            />
        )
    }
}

export default Register

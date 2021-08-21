import axios from 'axios';
import React, { Component } from 'react'
import Header from './Header';
import invalid from './invalid';

class AddStock extends Component {

    constructor( props) {
        super(props);
       
        this.state = {
            jeans: {},
            errorList:{},
            message: '',
            message1:''
           
            
            

        }
    }


    ProcessInput = (obj) => {
        let jeans = this.state.jeans;
        jeans[obj.target.name] = obj.target.value;
        this.setState({
            jeans
        })

    }

    saveData = (obj) => {
        obj.preventDefault();
        let jeans = this.state.jeans;
        let errorList = this.state.errorList;
        let formStatus = true;
    
        if(!jeans["Model"] || jeans["Model"]==""){
            formStatus = false;
                errorList["merror"] = "Please Enter Model name !";
                
        }else{
            errorList["merror"]= "";
            
        }

        if(!jeans["Size"] || jeans["Size"]==""){
            formStatus=false;
            errorList["Serror"] = "Please select size from the DropDown!";
        }else{
            errorList["Serror"]='';
        }

        if(!jeans["Price"] || jeans["Price"]==""){
            formStatus = false;
            errorList["perror"]="Please enter price";
        }else{
            errorList["perror"]="";
        }

        if(!jeans["Stock"]|| jeans["Stock"]==""){
            formStatus= false;
            errorList["serror"]= "Please enter stock";
        }else{
            errorList["serror"]="";
        }

        let msg =''
        if(formStatus==false){
            msg = "Higlighted fields should be filled";
        }else{
            msg="";

            let mess = '';
            if(!jeans["Model"] && !jeans["Price"] && !jeans["stock"]){
            formStatus = false
               mess="invalid Data ...!"
            }else{ 
            let Url = "http://localhost:3002/Jeans"
            let input = this.state.jeans;
            axios.post(Url, input)
                .then(response => {
                    this.setState({ 
                        message2:'Data submited Successfully!',
                        jeans : {},
                        errorList:"",
                        message:'',
                        name:''
                    })
                   
                })
                this.setState({
                    message1:mess
                })
            }
        }

        this.setState({
            errorList,
            message:msg
        })

       
        
    }

    render() {
        return (
            <div>
               <Header onClick={logout}/>
                <div className="contaner containers">
                    <p className="text-center text-danger">{this.state.message}</p>
                   <p className="text-center text-success">{this.state.message2}</p>
                    <form onSubmit={this.saveData}>
                    <div className="row">   
                        <div className="col-lg-3"></div>
                        <div className="col-lg-6">
                            <div className="card rounded">
                                <div className="card-header bg-primary text-center">
                                    <h3>AddStock Here</h3>
                                </div>
                                <div className="card-body">
                                <p className="text-danger text-center"> {this.state.message1}</p>
                                    <div className="row form-group">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-3 mr-2">
                                            <label className="text-center">Model <i className="text-danger">*</i>:</label>
                                        </div>
                                        <div className="col-lg-5">
                                            <input type="text"
                                                placeholder="Enter Model Name"
                                                name="Model"
                                                value={this.state.name}
                                                onChange={this.ProcessInput}
                                                className="form-control" />
                                                <small className="text-center text-danger">{this.state.errorList.merror}</small>
                                        </div>
                                        <div className="col-lg-2"></div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-3 mr-2">
                                            <label className="text-center">Size <i className="text-danger">*</i>:</label>
                                        </div>
                                        <div className="col-lg-5">
                                            <select type="text"
                                                name="Size"
                                                value={this.state.name}
                                                onChange={this.ProcessInput}
                                                className="form-control">
                                                    <option defaultValue >--CHOOSE--</option>
                                                    <option>28</option>
                                                    <option>30</option>
                                                    <option>32</option>
                                                    <option>34</option>
                                                    <option>36</option>
                                                    <option>38</option>
                                                    <option>40</option>
                                                    <option>42</option>
                                                    <option>44</option>
                                                     </select>
                                                <small className="text-center text-danger">{this.state.errorList.Serror}</small>
                                        </div>
                                        <div className="col-lg-2"></div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-3 mr-2">
                                            <label className="text-center">Price <i className="text-danger">*</i>:</label>
                                        </div>
                                        <div className="col-lg-5">
                                            <input type="number"
                                                placeholder="Enter Price"
                                                name="Price"
                                                value={this.state.name}
                                                onChange={this.ProcessInput}
                                                className="form-control" />
                                                <small className="text-danger">{this.state.errorList.perror}</small>
                                        </div>
                                        <div className="col-lg-2"></div>
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-lg-2"></div>
                                        <div className="col-lg-3 mr-2">
                                            <label className="text-center">AvailableStock <i className="text-danger">*</i>:</label>
                                        </div>
                                        <div className="col-lg-5">
                                            <input type="number"
                                                placeholder="Enter Available Stock"
                                                name="Stock"
                                                value={this.state.name}
                                                onChange={this.ProcessInput}
                                                className="form-control" />
                                                <small className="text-danger">{this.state.errorList.serror}</small>
                                        </div> 
                                        <div className="col-lg-2"></div>
                                    </div>
                                </div>
                                <div className="card-footer text-center bg-secondary">
                                    <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3"></div>
                    </div> 
                    </form>  
                </div>
            </div>
        )
    }
}
const logout = ()=>{
    localStorage.clear();
    let url = "http://localhost:3000/#/";
    window.location = url
}
export default AddStock


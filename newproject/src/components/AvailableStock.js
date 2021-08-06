import axios from 'axios';
import React, { Component } from 'react'
import Header from './Header';

 class AvailableStock extends Component {
     constructor(){
         super();
         this.state={
             shirts : [],
             jeans : [],
             Tshirts:[],
             SportsWear : [],
             message :''
         }
     }

     getShirtsData = async()=>{
        let data =''
        data = await axios.get("http://localhost:3002/shirts")
         .then(response=>{ 
             if(response.data!=0){
             this.setState({
                shirts: response.data   
             })
            }else{  
                this.setState({
                    message:"Nodata"
                })
            }
            })
        }

        getJeansData = async()=>{
            let data =''
            data = await axios.get("http://localhost:3002/jeans")
             .then(response=>{ 
                 if(response.data!=0){
                 this.setState({
                    jeans: response.data   
                 })
                }else{  
                    this.setState({
                        message:"Nodata"
                    })
                }
                })
            }

     componentDidMount = ()=>{
         this.getShirtsData();
         this.getJeansData();

     }
    render() {
        return (
           <div className="Background">
               <Header/>
                <div className="container page">
                    <div className="row mt-5">
                         <div className="col-lg-12">
                             <div className="row">
                        <div className="col-lg-6">
                        <table className="table table-sm table-bordered">
                            <thead className="text-center bg-primary">
                            
                                <tr>
                                    <th colSpan="4" className="bg-warning">Shtirst</th>
                                </tr>
                                <tr>
                                    <th>Id</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>Available Stock</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {
                                    this.state.shirts.map((shirt , index)=>{
                                        return(
                                           
                                        <tr key={index} className="table-active">
                                             
                                            <td >{shirt.id}</td>
                                            <td>{shirt.Model}</td>
                                            <td>{shirt.Price}</td>
                                            <td>{shirt.Stock}</td>
                                        </tr>
                                        );
                                    })
                                }
                               
                            </tbody>
                            
                        </table>
                        <p className="text-center text-">{this.state.message}</p>
                        </div>
                        <div className="col-lg-6">
                        <table className="table table-sm table-bordered">
                            <thead className="text-center bg-primary">
                                <tr>
                                    <th colSpan="4" className="bg-warning">T-shirts</th>
                                </tr>
                                <tr>
                                    <th>Id</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>Available Stock</th>
                                </tr>
                            </thead>

                        </table>
                        </div>
                        </div>
                        </div>
                    </div>        
                        
                       

                    <div className="row mt-5">
                        <div className="col-lg-12">
                        <div className="row mt-5">
                        <div className="col-lg-6">
                        <table className="table table-sm table-bordered">
                            <thead className="text-center bg-primary">
                                <tr>
                                    <th colSpan="4" className="bg-warning">Jeans</th>
                                </tr>
                                <tr>
                                    <th>Id</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>Available Stock</th>
                                </tr>
                            </thead>
                                <tbody className="text-center table-active">
                                    {
                                        this.state.jeans.map((jean , index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{jean.id}</td>
                                                    <td>{jean.Model}</td>
                                                    <td>{jean.Price}</td>
                                                    <td>{jean.Stock}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                        </table>
                        </div>
                        <div className="col-lg-6">
                        <table className="table table-sm table-bordered">
                            <thead className="text-center bg-primary">
                                <tr>
                                    <th colSpan="4" className="bg-warning">Sportsweare</th>
                                </tr>
                                <tr>
                                    <th>Id</th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>Available Stock</th>
                                </tr>
                            </thead>

                        </table>
                        </div>
                    </div>
                    </div>
                     </div>

                </div>
                </div>
        )
    }
}

export default AvailableStock;

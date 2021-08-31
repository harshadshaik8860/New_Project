import axios from 'axios';
import React, { Component } from 'react'
import Header from './Header';
import Geans from './Geans';


 class AvailableStock extends Component {
     constructor(props){
         super(props);
         this.state={
             shirts : [],
             jeans : [],
             Tshirts:[],
             SportsWear : [],
             message :'',
             null : 'nodata',
             cart:''
         }
     }

     geSportsWearData = ()=>{
          axios.get("http://localhost:3002/SportsWeare")
         .then(response=>{
             this.setState({
                 SportsWear: response.data
             })
         })
     }

     getCart = () =>{
        axios.get("http://localhost:3002/CartItems")
        .then(response=>{
            this.setState({
                cart:response.data
        })
    })
}

     getShirtsData = async()=>{
        let data =''
        data = await axios.get("http://localhost:3002/Shirts")
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

        getTshirtData = async(data)=>{
           data = await axios.get("http://localhost:3002/Tshirts")
           .then(response=>{
               this.setState({
                   Tshirts:response.data
               })
           })
        }

        getJeansData = async()=>{
            let data =''
            data = await axios.get("http://localhost:3002/Jeans")
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
         this.geSportsWearData();
         this.getTshirtData();
        this.getCart();
     }

    render() {
        return (
           <div className="Background">
               <Header cartitem={this.state.cart.length}/>
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
                            <tbody className="text-center table-active">
                               
                                    
                               {
                                    this.state.Tshirts && this.state.Tshirts.length> 0 ?
                                   this.state.Tshirts.map((tshirt , index)=>{
                                       return(
                                           <tr key={index} className="text-center" >
                                               <td>{tshirt.id}</td>
                                               <td>{tshirt.Model}</td>
                                               <td>{tshirt.Price}</td>
                                               <td>{tshirt.Stock}</td>
                                           </tr>
                                       );
                                   })
                                   :"nodata..."
                               }
                               
                           </tbody>
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
                                         this.state.jeans && this.state.jeans.length> 0 ?
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
                                        :null
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
                            <tbody>
                                 
                                {
                                    this.state.SportsWear && this.state.SportsWear.length> 0 ?
                                   
                                    this.state.SportsWear.map((swear, index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{swear.id}</td>
                                                <td>{swear.Model}</td>
                                                <td>{swear.Price}</td>
                                                <td>{swear.Stock}</td>
                                            </tr>
                                            
                                        )
                                    })
                                

                               
                                    : null
                                }
                            </tbody>

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

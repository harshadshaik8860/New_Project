import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import './mycart.css'
import Geans from './Geans';
// import { DataGrid } from '@material-ui/data-grid';

// const columns = [
//     {field:'id', headerName:'ID', width: 90},
//     {
//         field: 'ProductName',
//         headerName: 'Product Name',
//         width: 150,
//         editable: true,
//       },
//       {
//         field: 'Size',
//         headerName: 'Size',
//         width: 150,
//         editable: true,
//       },
//       {
//         field: 'Quantity',
//         headerName: 'Quantity',
//         type: 'number',
//         width: 110,
//         editable: true,
//       },
//       {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: false,
//         width: 160,
//         valueGetter: (params) =>
//           `${params.getValue(params.id, 'firstName') || ''} ${
//             params.getValue(params.id, 'lastName') || ''
//           }`,
//       },
// ]

// const row = [

// ]


const MyCart = (props) => {

 const [cartitem , updateCartItem] = useState([]);
 const [message , updateMessage] = useState('');
 const [count , updateCount] = useState(1);
 
 const increaseItem =()=>{
     updateCount(count +1);
 }

 const decreaseItem =()=>{
    updateCount(count -1);
}

  const getCart = () =>{
    axios.get("http://localhost:3002/CartItems")
    .then(response=>{updateCartItem(response.data)
       
    })
}

const deleteItem = (pid)=>{
 axios.delete("http://localhost:3002/CartItems/"+pid)
 .then(response=>{
     updateMessage("Item Removed");
     getCart();
 })
 
}

useEffect(() => { 
   getCart();
   deleteItem();
   

}, [true])
    

    return (
        <div>
            <Header cartitem={cartitem.length}/>
            <p className="text-success text-center">{message}</p>
            <div className="mt-5">
                
                    {
                                        cartitem.map((item,index)=>{
                                            return(
                                               <div className="row">
                                                   <div className="col-lg-2"></div>
                                                   <div className="col-lg-8">
                                                   <div className="card">
                    <div className="card-body">
                    <div className="row" key={index}>
                                                   <div className="col-lg-3">
                                                      <div className="mb-2"> <lable>Product Name</lable></div>
                                                       {item.Pname}
                                                   </div>
                                                   <div className="col-lg-2">
                                                      <div className="mb-2"> <lable>Size</lable></div>
                                                   {item.Size}
                                                   
                                                   </div>
                                                   <div className="col-lg-2">
                                                   <div className="mb-2">
                                                       <label>Quantity</label>
                                                       </div>
                                                   

                                                   <div className="form-group">
                                                   <button className="btn btn-info btn-sm" onClick={decreaseItem}>-</button>
                                                   <small className="form-control-sm group">{count}</small>
                                                   <button className="btn btn-info btn-sm" onClick={increaseItem}>+</button>
                                                   </div>
                                                   
                                                   </div>
                                                   <div className="col-lg-2">
                                                     <div className="mb-2">  <lable>Delete</lable>
                                                     </div>
                                                     <div>
                                                   <button className="btn btn-danger btn-sm" onClick={deleteItem.bind(this, item.id)}>Delete</button>
                                                   </div>
                                                   </div>
                                                   <div className="col-lg-3">
                                                       <div className="mb-2">
                                                       <label>Price</label>
                                                       </div>
                                                   {item.Price}
                                                   </div>
                                                   </div>
                                               </div> 
                                               </div>
                </div> 
                <div className="col-lg-2"></div></div>
                                            )
                                        })
                                    }
                    
                                
                           
            </div>
           
            </div>
    )
}

export default MyCart;

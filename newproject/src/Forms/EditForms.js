import React, {useState , useEffect}from 'react';
import {useHistory, useParams} from 'react-router-dom';
import axios from 'axios';
import { TextField , MenuItem, OutlinedInput,InputLabel, CardActions, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {Card , CardContent}from '@material-ui/core';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        marginleft: theme.spacing(5)
      },
    },
  }));

 
const EditForm = ()=>{
    const history = useHistory();
    const sizes1 =[ {value:"26"}, {value: 28}, {value: 30}, {value: 32},{value: 34},{value: 36},{value: 38}]
    const classes = useStyles();
  
    const{id} =useParams();
    const[pname, updatePname] = useState();
    const[mname, updateMname] = useState();
    const[size, updateSize] = useState('size');
    const[stock, updateStock] = useState();
    const[price, updatePrice] = useState();
    const[message, updateMessage] = useState();
    

    const getData= () =>{
        axios.get ("http://localhost:3002/Jeans/"+id)
        .then(response=>{
            updatePname(response.data.Pname);
            updateMname(response.data.Mname);
            updateStock(response.data.Stock);
            updatePrice(response.data.Price);
            updateSize(response.data.Size)
        })
    }

    useEffect(()=>{
        getData();
        
    },[true])

    
    const sizeChange = (e)=>{
        updateSize(e.target.value)
    }
    const PnameChange = (e)=>{
        updatePname(e.target.value)
    }
    const MnameChange = (e)=>{
        updateMname(e.target.value)
    }
    const StockChange = (e)=>{
        updateStock(e.target.value)
    }
    const PriceChange = (e)=>{
        updatePrice(e.target.value)
    }
    
    const updateInfo = ()=>{
        var updata = {
            "Pname": pname,
            "Mname":mname,
            "Stock":stock,
            "Price":price,
            "Size":size

        }
        axios.put("http://localhost:3002/Jeans/"+id ,updata)
        .then(response=>{
            updateMessage(pname + "Data Updated Sucessful..")
       window.location.href='http://localhost:3000/#/dashboard'
     window.location.reload();

        })
        updateSize("");
        updatePname("");
        updateMname("");
        updateStock("");
        updatePrice("")
        
    }
    
        
    return(

        <div className="container mt-5">
            <Typography color="primary" align="center">{message}</Typography>
            <div className="row mt-5">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <Card className ={classes.root} variant="outlined" maginleft="auto">
                        <Typography color="secondary" align="center"className="mt-4">Update Data Here!</Typography>
                        <CardContent>
                    <TextField
                   label="Pname"
                   type="text" 
                   value={pname}
                   onChange={PnameChange}
                   variant="outlined"
                   InputLabelProps={{
                    shrink: true,
                  }}
                   />

                    <TextField
                   label="Mname"
                   type="text" 
                   value={mname}
                   onChange={MnameChange}
                   variant="outlined"
                   InputLabelProps={{
                    shrink: true,
                  }}
                   />
                   
                   <TextField
                   select 
                   label="Size"
                   value={size}
                   onChange={sizeChange}
                   type="text" 
                   variant="outlined"
                   >
                    {sizes1.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
                   </TextField>

                   <TextField
                   label="Stock"
                   
                   type="text" 
                   value={stock}
                   onChange={StockChange}
                   variant="outlined"
                   InputLabelProps={{
                    shrink: true,
                  }}
                   />

                   <TextField
                   label="Price"
                   type="text" 
                   value={price}
                   onChange={PriceChange}
                   variant="outlined"
                   InputLabelProps={{
                    shrink: true,
                  }}
                   />

                   
                   </CardContent>
                   <CardActions style={{justifyContent:"center"}}>
                   <Button 
                   variant="contained"
                   color="primary"
                   
                   onClick={updateInfo}
                   >
                       UpdateInfo
                   </Button>
                   <Button 
                   variant="contained"
                   color="primary"
                   
                   onClick={()=>history.push("/dashboard")}
                   >
                       Back
                   </Button>
                   </CardActions>
                </Card>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div> 
    );

}
export default EditForm;
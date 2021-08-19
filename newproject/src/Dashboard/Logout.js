import React from 'react'

 const Logout =() =>{
    return (
        <div>
            <div className="row p-2 bg-secondary">
                <div className="col-lg-9 text-center">
                
                <h3 className="pt-2 pl-5 text-white"> Welcome to DashBoard</h3>
                </div>
                <div className="col-lg-3 pt-2 pl-5">
               
                     <button className="btn btn-primary btn-m" onClick={logout}> 
                     <i className="fa fa-user pr-1"></i> {localStorage.getItem("userid")} - Logout <i className="fa fa-power-off pl-2"></i></button>
                </div>
            </div>
        </div>
    )
}
const logout = () =>{
    localStorage.clear();
    window.location.href="http://localhost:3000/#/adminlogin";
    window.location.reload();
}
export default Logout;
import React from 'react'

 const Logout =() =>{
    return (
        <div>
            <div className="row p-2 bg-secondary">
                <div className="col-lg-10 text-center">
                
                <h3 className="pt-2 pl-5 text-white"> Welcome to DashBoard</h3>
                </div>
                <div className="col-lg-2 pt-2">
               
                     <button className="btn btn-primary btn-m" onClick={logout}> <i className="fa fa-user"></i> {localStorage.getItem("name")} - Logout <i className="fa fa-power-off"></i></button>
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
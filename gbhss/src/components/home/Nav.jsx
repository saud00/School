import React from "react";
import { NavLink } from "react-router-dom";

const Nav=()=>{
    return(
        <>
        <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto"> 

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">GBHSS Malal</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active" 
          className="nav-link active" aria-current="page" to="/Admission">
              Admissions
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" 
           className="nav-link" to="/Results">
               Results
            </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" 
           className="nav-link" to="/About">
               About
            </NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
</div>
            </div>
        </div>
        </>
    )
}

export default Nav;
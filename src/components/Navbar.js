import React from "react";
//import "../App.css"

const Navbar=()=>{
    return(
    <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark bg-primary">
       
            <a className="navbar-brand" href="https://www.linkedin.com/in/nithin-valiyaveedu/">Nithin Valiyaveedu</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="main_nav">	
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a class= "nav-link" href="https://google.com"> Home </a></li>
                    <li className="nav-item"><a class= "nav-link" href="https://google.com"> About me </a></li>
                    <li className="nav-item"><a class="nav-link" href="https://facebook.com"> Projects </a></li>
                    <li className="nav-item"><a class="nav-link" href="https://facebook.com"> Get in touch </a></li>
                    
                </ul>
            </div> 
         
    </nav>

    )
}

export default Navbar;
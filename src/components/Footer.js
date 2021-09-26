import React from "react";
import "../App.css"

const Footer = ()=>{

    return(
        <footer className="bg-dark text-center text-white ">
            <div className="p-4 pb-0">
            <section className="mb-4">
            
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a>
            </section>
        </div>
      <div className="text-center p-3" style={{backgroundColor: "black"}}>© 2021 Copyright: 
        <a className="text-white" href="https://mdbootstrap.com/">Nithin Valiyaveedu</a>
      </div>
    </footer>
    )
}

export default Footer;
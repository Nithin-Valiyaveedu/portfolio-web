import React from "react"
import "../App.css"

const HeroSection =()=>{
    return(
      <div className="containerhero">
        
        <h1><span className="wave">👋</span></h1>  
        <h1 className="typewrite " data-period="500" data-type='[ "Hi there!", "Welcome to my website","Scroll down to know me better"]'>
        
        <span className="wrap"></span>
        </h1>
        
      </div>
      

    )
}

export default HeroSection;

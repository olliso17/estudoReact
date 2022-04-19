import React from "react";
import '../components/Box.css'

export default (props)=>{
   
    return(
        <div className={props.className} >
           {props.children}
        </div>
    );
}
import React from "react";
import '../cards/Box.css'

export default (props)=>{
   
    return(
        <div className={props.className} >
           {props.children}
        </div>
    );
}
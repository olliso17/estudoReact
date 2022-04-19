import React from "react";
import '../components/Box.css'


export default props =>{
    return(
        <h1 className= {props.className}>{props.titulo}</h1>
    );
}
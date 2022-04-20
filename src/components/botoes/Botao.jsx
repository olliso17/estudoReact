import React from "react";
import '../cards/Box.css'

export default props=>{
    return(
        <button href="url" className={props.className}><p>{props.titulo}</p></button>
    );
}
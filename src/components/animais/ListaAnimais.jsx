import React from "react";
import animais from "./animais";


export default props =>{
   
    const  animal = animais.map(
       
        animais=>{
           
            return <li>{animais.id}-{animais.tipo}-{animais.idade}-{animais.nome}-{animais.sexo}</li>
        }
    );
    return(
        <div>
            <ul>
                {animal}
            </ul>
        </div>
    );
}
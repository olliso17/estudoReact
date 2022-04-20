import React from "react";
import animais from "./animais";


export default (props)=>{
    const  animais = animais.map(
        animais=>{
            return <li>{animais.id}-{animais.tipo}-{animais.idade}-{animais.nome}-{animais.sexo}-{animais.imagem}</li>
        }
    );
    return(
        <div>
            <ul>
                {animais}
            </ul>
        </div>
    );
}
import React from "react";
import animais from "./animais";
import Tabela from "../Tabela";
import '../cards/Box.css'


export default props =>{
  
    const  animal = animais.map(
       
        animais=>{
           
            return  <tr>
                        <td>{animais.id}</td>
                        <td>{animais.tipo}</td>
                        <td>{animais.idade}</td>
                        <td>{animais.nome}</td>
                        <td>{animais.sexo}</td>
                    </tr>
           
   
        }
    );
    return(
        <Tabela className="tabelaPets" conteudo = {animal}></Tabela>
   
     
    );
}
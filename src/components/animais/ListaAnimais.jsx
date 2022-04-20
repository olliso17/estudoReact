import React from "react";
import animais from "./animais";
import Tabela from "../Tabela";
import '../cards/Box.css'


export default props =>{
  
    function getIndice(){
        return <tr >
        <th>Id</th>
        <th>Tipo</th>
        <th>Idade</th>
        <th>Nome</th>
        <th>Sexo</th>
    </tr>
    
    }
    const  animal = animais.map(
       
        animais=>{
           
            return  <tr className='conteudo'>
                        <td>{animais.id}</td>
                        <td>{animais.tipo}</td>
                        <td>{animais.idade}</td>
                        <td>{animais.nome}</td>
                        <td>{animais.sexo}</td>
                    </tr>
           
   
        }
    );
    return(
        <Tabela texto="Tabela Animais" className="divPet" classTabela="tabelaPets" indice={getIndice()} conteudo = {animal}></Tabela>
   
     
    );
}
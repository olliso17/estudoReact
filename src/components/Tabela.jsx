import React from "react";

export default props=>{
    return (
        <div className={props.className}>
           <h1>{props.texto}</h1> 
            <table className={props.classTabela}>
                <thead>
                    {props.indice}

                </thead>

                <tbody>

                        {props.conteudo}

                </tbody>
            </table>
        </div>
        
    );
}
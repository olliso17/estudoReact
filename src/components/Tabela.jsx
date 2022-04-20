import React from "react";

export default props=>{
    return (
        <table className={props.className}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tipo</th>
                    <th>Idade</th>
                    <th>Nome</th>
                    <th>Sexo</th>
                </tr>
                

            </thead>

            <tbody>

                    {props.conteudo}

            </tbody>
        </table>
    );
}
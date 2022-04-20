import React from "react";

export default props=>{
    return (
        <table>
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
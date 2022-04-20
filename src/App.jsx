import React from "react";
import Box from "./components/cards/Box";
import Botao from "./components/botoes/Botao";
import Titulo from "./components/Titulo";
import Icones from "./components/Icones";
import Input from "./components/Input";
import ListaAnimais from "./components/animais/ListaAnimais";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function App() {
    const header = {

    }
    return (
        <>
            <Box className='container'>
                <Box className="topo" >
                    <Titulo className="titulo" titulo='SeusPets'></Titulo>
                    <Input className="input"></Input>
                    
                    <a href="">ìcone</a>
                    
                    <Botao className='botao' titulo='Assinatura'></Botao>
                    <Botao className='botao' titulo='Minha Conta'></Botao>
                    <Botao className='botao' titulo='Carrinho'></Botao>
                </Box>
                <Box className="header">
                    <Botao className='botao' titulo='Cachorros'></Botao>
                    <Botao className='botao' titulo='Gatos'></Botao>
                    <Botao className='botao' titulo='Pássaros'></Botao>
                    <Botao className='botao' titulo='Roedores'></Botao>
                    <Botao className='botao' titulo='Aquarismo'></Botao>
                    <Botao className='botao' titulo='Répteis'></Botao>

                </Box>
                <Box className='body'>
                    
                    <ListaAnimais >
                    </ListaAnimais>
                </Box>
                <Box className='fundo'></Box>
            </Box>
        </>
    );
}


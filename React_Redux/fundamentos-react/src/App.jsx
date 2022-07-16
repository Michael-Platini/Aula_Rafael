import "./App.css"
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import Usuarioinfo from "./components/condicional/Usuarioinfo";
import ParouImpar from "./components/condicional/ParouImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmentos';
import ComParamentro from './components/basicos/ComParamentro';
import Primeiro from './components/basicos/Primeiro';



export default () => (
    <div className="App">
        <h1>Fundamentos React </h1>

        <div className="Cards">
            <Card titulo="#13 - mega " color="#B9006E">
                <Mega qtde={8}></Mega>
               
            </Card>
            <Card titulo="#12 - Contador " color="#424242">
                <Contador numeroInicial={10}></Contador>
               
            </Card>
            <Card titulo="#11 - Componente Controlado (Input) " color="#E45F56">
                <Input></Input>
               
            </Card>
            <Card titulo="#10 - Comunicação Indireta " color="#8BAD39">
                <IndiretaPai></IndiretaPai>
               
            </Card>
            <Card titulo="#09 - Comunicação Direta " color="#59323C">
                <DiretaPai></DiretaPai>
               
            </Card>
            <Card titulo="#08 - Rederização Condicional" color="#982395">
                <ParouImpar numero={21}></ParouImpar>
                <Usuarioinfo usuario={{ nome: 'Michael'}}></Usuarioinfo>
                <Usuarioinfo usuario={{}}></Usuarioinfo>
            </Card>
        
            <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
        
            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Platini" >
                    <FamiliaMembro nome="Michael" />
                    <FamiliaMembro nome="Gwen" />
                    <FamiliaMembro nome="Mefen" />

                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="#02 - ComParamentro" color="#E8B71A">
                <ComParamentro
                    titulo="Situação do aluno"
                    aluno="Michael Platini"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588c73">
                <Primeiro></Primeiro>
            </Card>

        </div>









    </div>
);

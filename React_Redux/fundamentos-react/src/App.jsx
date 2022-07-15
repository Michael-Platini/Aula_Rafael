import "./App.css"
import React from "react";

import Card from "./components/layout/Card";

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
            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
            <Familia sobrenome="Platini" >
                <FamiliaMembro nome="Michael"/>
                <FamiliaMembro nome="Gwen" />
                <FamiliaMembro nome="Mefen"/>
                
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

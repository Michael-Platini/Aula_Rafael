import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    const [a,b] = [1,2]
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)
   

    function fornecerInformaĆ§oes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong> {idade} </strong></span>
                <span>{nerd ? 'Verdadeira' : 'Falso'}</span>
            </div>
                <IndiretaFilho quandoClicar={fornecerInformaĆ§oes}></IndiretaFilho>

        </div>
    )
}
import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props => {
    return (
        <div>
            <DiretaFilho nome="Platini" idade={20} nerd={true} />
            <DiretaFilho nome="Michael" idade={17} nerd={false} />
        </div>
    )
}
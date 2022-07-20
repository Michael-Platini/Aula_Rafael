import React from "react";

export default props => {
    return (
        <div>
            <div>
                <label htmlfor="passoInput">Passo: </label>
                <input id="passoInput" type="number"
                    Value={props.passo}
                    onChange={e => props.setPasso(+e.target.value)} />
            </div>
        </div>
    )

}
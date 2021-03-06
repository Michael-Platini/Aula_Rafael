import React from 'react'
import {connect} from 'react-redux'

import Card from './Card'

const Media = props => {
    const {min, max} = props
    console.log(props)
    

    return (
        <Card title="Média dos Números" Green>
    <div >
        <span>
            <span>Resultado: </span>
            <strong>{(min + max) / 2}</strong>
           
        </span>
       
    </div>
        </Card>
    )

}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max,
        
    }

}

export default connect(mapStateToProps)(Media)

import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {initialState, reducer} from '../../store'
import { number_add2, login } from '../../store/actions'





const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center"></div>
            {state.user ? <span className="text">{state.user.name}</span>
                : <span className='text'>Sem Usúario</span>
            }

            <span className="text">{state.number}</span>
            <div>
                <button className="btn"
                    onClick={() => login(dispatch, 'Michael' )}>Login</button>
                <button className="btn"
                    onClick={() => number_add2(dispatch)}>+2</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'number_multi7' })}>*7</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'number_div25' })}>/25</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'number_int' })}>Int</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'number_addN', payload: -9 })}>-9</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'number_addN', payload: +11 })}>+11</button>
            </div>
        </div>
    )
}

export default UseReducer

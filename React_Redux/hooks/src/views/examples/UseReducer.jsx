import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'


const initialState = {
    cart: [],
    products: [],
    user: null, 
    number: 0,

}

export function reducer(state, action) {
    switch (action.type) {
        case 'number_add2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: {name: action.payload} }
        case 'number_multi7':
            return { ...state, number: state.number * 7 }
        case 'number_div25':
            return { ...state, number: state.number / 25 }
        case 'number_Int':
            return { ...state, number: parseInt(state.number) }
        case 'number_addN':
            return { ...state, number: state.number + action.payload }
        default:
            return state
    }
}

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
                    onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Login</button>
                <button className="btn"
                    onClick={() => dispatch({ type: 'number_add2' })}>+2</button>
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

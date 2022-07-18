import { numberReducer } from './actions/number'
import { userReducer } from './actions/user'

export function reducer(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}
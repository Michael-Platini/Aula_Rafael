import { combineReducers, legacy_createStore as createStore } from "redux";
import numerosRuducer from'./reducers/numeros'

const reducers = combineReducers ({
    numeros: numerosRuducer,

        
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig
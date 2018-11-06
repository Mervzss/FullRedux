import { createStore, combineReducers } from "redux";
import NameReducer from '../Reducers/addTab'
import AccountsReducer from '../Reducers/accountLogin'
const reducerCombine = combineReducers({
    nameReducer : NameReducer,
    accountsReducer : AccountsReducer
    
})

const config = () =>{
    return createStore(reducerCombine)
}

export default config;
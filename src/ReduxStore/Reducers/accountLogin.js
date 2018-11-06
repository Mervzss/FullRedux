import {CREATE_ACCOUNT,CHECK_ACCOUNT} from '../Action/actionVariables'

const initialState ={
    userName:[],
    password:[],
    verify: false
}

const accountsReducer = (state = initialState, action) =>{
    switch(action.type){
        case CREATE_ACCOUNT:
        return{
            ...state,
            userName: [...state.userName,action.userName],
            password: [...state.userName,action.password]
        }
        case CHECK_ACCOUNT:
        return{
            ...state,
            verify: state.userName.includes(action.userName) && state.password.includes(action.password)
        }
        default:
        return state
    }
}
export default accountsReducer;
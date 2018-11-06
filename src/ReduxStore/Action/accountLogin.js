import {CREATE_ACCOUNT,CHECK_ACCOUNT} from './actionVariables'

export const createAccount= (userName,password) =>{
    return{
        type: CREATE_ACCOUNT,
        userName : userName,
        password : password
    }
}

export const checkAccount = (userName,password) =>{
    return{
        type: CHECK_ACCOUNT,
        userName: userName,
        password: password
    }
}
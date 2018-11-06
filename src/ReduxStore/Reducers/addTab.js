import {ADD_NAME} from '../Action/actionVariables'

const initialState ={
    name:["Test","Me"]
}
const nameReducer = (state = initialState, action) =>
{
    switch(action.type){
        case ADD_NAME:
        return{
            ...state,
            name: [...state.name, action.name]
        }
        default:
        return state;
    }
}

export default nameReducer;
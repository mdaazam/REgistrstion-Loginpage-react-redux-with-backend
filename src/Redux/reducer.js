import {  FETCH_USERS_SUCCESS } from "./ActionTypes"


const intialState = {
    users: []
}

const reducer = (state = intialState, action) => {
        switch(action.type){
        case FETCH_USERS_SUCCESS:
            return {
                users: action.payload,
            }
            default: return state
        }
}

export default reducer;
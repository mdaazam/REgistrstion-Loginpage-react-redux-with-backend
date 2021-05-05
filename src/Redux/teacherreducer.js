import { FETCH_TEACHERS_SUCCESS } from "./ActionTypes"


const intialState = {
    teachers: []
}

const teacherreducer = (state = intialState, action) => {
        switch(action.type){
        case FETCH_TEACHERS_SUCCESS:
            return {
                teachers: action.payload,
            }
            default: return state
        }
    
}

export default teacherreducer;
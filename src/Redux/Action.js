import { FETCH_USERS_SUCCESS } from "./ActionTypes";
import { FETCH_TEACHERS_SUCCESS} from "./ActionTypes"
import axios from 'axios';

export const fetchTeachersSuccess = (teachers) => {
    return{
        type: FETCH_TEACHERS_SUCCESS,
        payload: teachers
    }
}

export const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsers = () => {
    return(dispatch) => {

        axios.get("http://localhost:4000/user").then(res => {
            
            dispatch(fetchUsersSuccess(res.data))
            console.log(res.data)
            
        }).catch(err => {
            const errorMsg = err.message
        })
    }
}

export const fetchTeachers = () => {
    return(dispatch) => {
        axios.get("http://localhost:4000/teach").then(res => {
            dispatch(fetchTeachersSuccess(res.data))
            console.log(res.data)
        }).catch(err => {
            console.log("error", err.message)
        })
    }
}
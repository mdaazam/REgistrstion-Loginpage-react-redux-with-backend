import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import teacherreducer from './teacherreducer';

const rootReducer = combineReducers({
    users: reducer,
    teachers: teacherreducer
})


export const store = createStore(rootReducer , applyMiddleware(thunk));

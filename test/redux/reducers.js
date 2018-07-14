import { combineReducers } from 'redux';
import * as serverReducers from '../../src/serverReducers';
import { getBaseFromActionType as getBaseType } from '../../src/helper';
import { UserActions } from './constants';


const userReducer = (state = serverReducers.defaultState, action) => {
    switch (getBaseType(action.type)) {
        case UserActions.GETALL_USERS:
            return serverReducers.setAllObjects(state, action);
        case UserActions.CREATE_USER:
            return serverReducers.addObject(state, action);
        case UserActions.DELETE_USER:
            return serverReducers.deleteObject(state, action);
        default:
            return state;
    }
};

export default combineReducers({
    users: userReducer,
});

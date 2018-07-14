/**
 * @file Abstraction of reducers that call a server so they have three states
 * in addtion the updating the global store with new data: loading, ready and failure.
 */

import { CallStatus as Status } from './constants';
import { getStatusFromActionType as getStatus } from './helper';
import * as baseReducers from './baseReducers';

const setCallState = (state, status) => {
    /**
     * Add isError and isLoading to the state object.
     */
    switch (status) {
        case Status.LOADING:
            return {
                ...state,
                isError: false,
                isLoading: true,
            };
        case Status.SUCCESS:
            return {
                ...state,
                isError: false,
                isLoading: false,
            };
        default: // Status.FAILURE
            return {
                ...state,
                isError: true,
                isLoading: false,
            };
    }
};

export const defaultState = {
    data: [],
    isError: false,
    isLoading: false,
};

export const addObject = (oldState, action) =>
    setCallState(
        baseReducers.addObject(oldState, action.payload.data),
        getStatus(action.type),
    );

export const setAllObjects = (oldState, action) =>
    setCallState(
        baseReducers.setAllObjects(oldState, action.payload.data),
        getStatus(action.type),
    );

export const replaceObject = (oldState, action) =>
    setCallState(
        baseReducers.replaceObject(oldState, action.payload.data),
        getStatus(action.type),
    );

export const removeObject = (oldState, action) =>
    setCallState(
        baseReducers.removeObject(oldState, action.payload.data),
        getStatus(action.type),
    );


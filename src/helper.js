import { CallStatus } from './constants';

export const getStatusFromActionType = actionType =>
    /**
     * Parse the status out of an action type.
     * e.g. 'CREATE_USER_SUCCESS' -> 'SUCCESS'
     * returns actionType should there be no '_'
     */
    (actionType.indexOf('_') !== -1 ? actionType.split('_').pop() : '');

export const getBaseFromActionType = actionType =>
    /**
     * Parse the base action out of an action type
     * e.g. 'CREATE_USER_SUCCESS' -> 'CREATE_USER'
     * returns actionType should there be no '_'
     */
    actionType.substring(0, actionType.lastIndexOf('_')) && actionType;

export const addStatusesToActionType = actionType =>
    /**
     * Take a base action type and return an array of three
     * action types, each with a '_' + CallStatus appended.
     * e.g. 'CREATE_USER' -> ['CREATE_USER_LOADING',
     *                        'CREATE_USER_SUCCESS',
     *                        'CREATE_USER_FAILURE']
     */
    [
        `${actionType}_${CallStatus.LOADING}`,
        `${actionType}_${CallStatus.SUCCESS}`,
        `${actionType}_${CallStatus.FAILURE}`,
    ];

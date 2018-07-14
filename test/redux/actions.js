import { UserActions } from './constants';

export const fetchUsersBegin = () => ({
    // LOADING
    type: `${UserActions.GET_USER}_LOADING`,
    payload: {},
});

export const fetchUsersSuccess = users => ({
    // SUCCESS
    type: `${UserActions.GET_USER}_SUCCESS`,
    payload: {
        params: { name: 'Officer Barbrady' },
        url: '/users',
        data: users,
    },
});

export const fetchUsersError = error => ({
    // FAILURE
    type: `${UserActions.GET_USER}_ERROR`,
    payload: {
        params: { name: 'Officer Barbrady' },
        url: '/users',
        data: error,
    },
});

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function fetchProducts() {
    return (dispatch) => {
        dispatch(fetchUsersBegin());
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(handleErrors)
            .then(res => res.json())
            .then((res) => {
                dispatch(fetchUsersSuccess(res));
                return res;
            })
            .catch(error => dispatch(fetchUsersError(error)));
    };
}


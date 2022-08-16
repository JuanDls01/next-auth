import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
} from '../actions/types';

type initialState = {
    access: string | null,
    refresh: string | null,
    isAuthenticated: null | boolean,
    user: null | JSON,
    loading: boolean,
}

const initialState: initialState = {
    access: null,
    refresh: null,
    isAuthenticated: null,
    user: null,
    loading: false
}

type action = {
    type: string,
    payload: any,
}
const Auth = (state = initialState, action: any) => {
    const { type, payload } = action;

    switch (type) {
        case SIGNUP_SUCCESS:
        case SIGNUP_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            }
        default:
            return state
    }

}


export default Auth
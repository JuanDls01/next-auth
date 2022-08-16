import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
} from './types';
import { Dispatch } from "react";

import axios from 'axios';

export const signup = (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    re_password: string
) => {
    return async (dispatch: Dispatch<any>) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            re_password
        })

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config)

            if (res.status === 201) {
                return dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: res.data
                })
            } else {
                return dispatch({
                    type: SIGNUP_FAIL
                })
            }
        }
        catch (err) {
            console.log(err);
            dispatch({
                type: SIGNUP_FAIL,
            })
        }
    }
}
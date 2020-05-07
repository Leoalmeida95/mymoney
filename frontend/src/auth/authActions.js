import { toastr } from 'react-redux-toastr'
import axios from 'axios'

import EActions from '../common/constants/actionsTypes'
import consts from '../config/server'

export function login(values) {
    return submit(values, `${consts.OAPI_URL}/login`)
}

export function signup(values) {
    return submit(values, `${consts.OAPI_URL}/signup`)
}

function submit(values, url) {
    return dispatch => {
        axios.post(url, values)
            .then(resp => {
                dispatch([
                    { type: EActions.Auth.user, payload: resp.data }
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(
                    error => toastr.error('Erro', error))
            })
    }
}

export function logout() {
    return { type: EActions.Auth.token, payload: false }
}

export function validateToken(token) {
    return dispatch => {
        if (token) {
            axios.post(`${consts.OAPI_URL}/validateToken`, { token })
                .then(resp => {
                    dispatch({ type: EActions.Auth.token, payload: resp.data.valid })
                })
                .catch(e => dispatch({ type: EActions.Auth.token, payload: false }))
        } else {
            dispatch({ type: EActions.Auth.token, payload: false })
        }
    }
}
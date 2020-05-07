import axios from 'axios'

import consts from '../config/server'
import {toastr} from 'react-redux-toastr'
import EActionTypes from '../common/constants/actionsTypes'

export function getSummary(){
    const request = axios.get(`${consts.API_URL}/billingCycles/summary`)
                        .catch(err => {
                            err.response.data.errors.forEach(e => toastr.error('Erro', e))
                        })
    return{
        type:  EActionTypes.Dashboard.summary,
        payload: request
    }
}
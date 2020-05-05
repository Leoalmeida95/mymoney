import axios from 'axios'
import URL from '../config/server'
import {toastr} from 'react-redux-toastr'

export function getSummary(){
    const request = axios.get(`${URL}/billingCycles/summary`)
                        .catch(err => {
                            err.response.data.errors.forEach(e => toastr.error('Erro', e))
                        })
    return{
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}
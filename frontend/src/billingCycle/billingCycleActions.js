import axios from 'axios'
import {toastr} from 'react-redux-toastr'

import URL from '../config/server'

export function getList(){
    const request = axios.get(`${URL}/billingCycles`)
                        .catch(err => {
                            err.response.data.errors.forEach(e => toastr.error('Erro', e))
                        })
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    const request = axios.post(`${URL}/billingCycles`, values)
                        .then(resp => {
                             toastr.success('Sucesso','Operação realizada com sucesso.')
                            })
                        .catch(err => {
                            err.response.data.errors.forEach(e => toastr.error('Erro', e))
                        })
    return{
        type: 'TEMP',
        payload: request
    }
}
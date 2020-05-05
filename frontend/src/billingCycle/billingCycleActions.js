import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm } from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'

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
    return dispatch => {
        axios.post(`${URL}/billingCycles`, values)
                            .then(resp => {
                                 toastr.success('Sucesso','Operação realizada com sucesso.')
                                 //só é possível passar o array pro dispatch graças ao redux multi
                                 dispatch([
                                    //todos os métodos são actions
                                    resetForm('billingCycleForm'),//passa de parametro o 'id' definido na criação do Form
                                    getList(),
                                    selectTab('tabList'),
                                    showTabs('tabList','tabCreate')
                                 ])
                                })
                            .catch(err => {
                                err.response.data.errors.forEach(e => toastr.error('Erro', e))
                            })
    }
}
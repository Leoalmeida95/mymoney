import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {initialize} from 'redux-form'

import {showTabs, selectTab} from '../common/tab/tabActions'
import ETabs from '../common/constants/tabs'
import HTTP from '../common/constants/methodsHttp'
import EActionTypes from '../common/constants/actionsTypes'
import EFormsIds from '../common/constants/formsIds'
import URL from '../config/server'

const INITIAL_VALUE = {credits: [{}]}

export function getList(){
    const request = axios.get(`${URL}/billingCycles`)
                        .catch(err => {
                            err.response.data.errors.forEach(e => toastr.error('Erro', e))
                        })
    return{
        type: EActionTypes.BillingCycles.list,
        payload: request
    }
}

export function create(values){
    return submit(values, HTTP.post)
}

export function update(values){
    return submit(values, HTTP.put)
}

export function remove(values){
    return submit(values, HTTP.delete)
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${URL}/billingCycles/${id}`, values)
            .then(resp => {
                    toastr.success('Sucesso','Operação realizada com sucesso.')
                    //só é possível passar o array pro dispatch graças ao redux multi
                    dispatch(clear())
                })
            .catch(err => {
                err.response.data.errors.forEach(e => toastr.error('Erro', e))
            })
        }
}

export function showAction(tab, formId, billingCycles){
    return [
        showTabs(tab),
        selectTab(tab),
        initialize(formId, billingCycles)
    ]
}

export function clear(){
    return [
        showTabs(ETabs.list, ETabs.create),
        selectTab(ETabs.list),
        getList(),
        initialize(EFormsIds.billingCycle, INITIAL_VALUE)
    ]
}
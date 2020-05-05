import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {initialize} from 'redux-form'

import {showTabs, selectTab} from '../common/tab/tabActions'
import ETabs from '../common/constants/tabs'
import EActionTypes from '../common/constants/actionsTypes'
import EFormsIds from '../common/constants/formsIds'
import URL from '../config/server'

const INITIAL_VALUE = {}

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
    return dispatch => {
        axios.post(`${URL}/billingCycles`, values)
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

export function showUpdate(billingCycles){
    return [
        showTabs(ETabs.update),
        selectTab(ETabs.update),
        initialize(EFormsIds.billingCycle, billingCycles)
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
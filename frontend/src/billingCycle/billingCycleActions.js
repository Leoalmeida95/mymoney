import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm } from 'redux-form'
import {showTabs, selectTab} from '../common/tab/tabActions'
import ETabs from '../common/constants/tabs'
import EActionTypes from '../common/constants/actionsTypes'
import EFormsIds from '../common/constants/formsIds'

import URL from '../config/server'

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
                                 dispatch([
                                    //todos os métodos são actions
                                    resetForm(EFormsIds.billingCycle),//passa de parametro o 'id' definido na criação do Form
                                    getList(),
                                    selectTab(ETabs.list),
                                    showTabs(ETabs.list,ETabs.create)
                                 ])
                                })
                            .catch(err => {
                                err.response.data.errors.forEach(e => toastr.error('Erro', e))
                            })
    }
}

export function showUpdate(billingCycles){
    return [
        showTabs(ETabs.update),
        selectTab(ETabs.update)
    ]
}
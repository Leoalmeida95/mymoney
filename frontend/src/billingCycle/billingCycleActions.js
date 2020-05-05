import axios from 'axios'
import URL from '../config/server'

export function getList(){
    const request = axios.get(`${URL}/billingCycles`)
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values){
    const request = axios.post(`${URL}/billingCycles`, values)
    return{
        type: 'TEMP',
        payload: request
    }
}
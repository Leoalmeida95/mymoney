import axios from 'axios'
import URL from '../config/server'

export function getList(){
    const request = axios.get(`${URL}/billingCycles`)
    return{
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}
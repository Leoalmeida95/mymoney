import axios from 'axios'
import URL from '../config/server'

export function getSummary(){
    const request = axios.get(`${URL}/billingCycles/summary`)
    return{
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}
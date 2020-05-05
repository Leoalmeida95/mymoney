import {combineReducers} from 'redux'
import {reducer as FormReducer} from 'redux-form'
import {reducer as ToastrReducer} from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCyclesRducer from '../billingCycle/billingCyclesReducer'
import TabReducer from '../common/tab/tabReducer' 

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclesRducer,
    toastr: ToastrReducer,
    form: FormReducer
})

export default rootReducer
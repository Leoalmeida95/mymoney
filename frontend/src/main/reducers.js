import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import DashboardReducer from '../dashboard/dashboardReducer'
import BillingCyclesRducer from '../billingCycle/billingCyclesReducer'
import TabReducer from '../common/tab/tabReducer' 

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclesRducer,
    form: formReducer
})

export default rootReducer
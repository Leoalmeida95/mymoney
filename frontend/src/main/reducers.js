import {combineReducers} from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer' 
import BillingCyclesRducer from '../billingCycle/billingCyclesReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCyclesRducer
})

export default rootReducer
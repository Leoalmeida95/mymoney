import EActionTypes from '../common/constants/actionsTypes'

const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EActionTypes.BillingCycles.list:
            return{
                ...state,
                list: action.payload.data
            }
        default:
            return state
    }
}
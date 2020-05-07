import EActionTypes from '../common/constants/actionsTypes'

const INITIAL_STATE = {summary: {credit:0, debt:0}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EActionTypes.Dashboard.summary:
            return{
                ...state,
                summary: action.payload.data
            }
        default:
            return state
    }
}
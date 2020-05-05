import EActionTypes from '../constants/actionsTypes'

const INITIAL_STATE = {selected: '', visible: {}}

export default (state=INITIAL_STATE, action) =>{
    switch(action.type)
    {
        case EActionTypes.Tabs.selected:
            return{...state, selected: action.payload}
        case EActionTypes.Tabs.show:
            return{...state, visible: action.payload}
        default:
            return state
    }
}
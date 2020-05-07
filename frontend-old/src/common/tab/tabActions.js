import EActionTypes from '../constants/actionsTypes'

export function selectTab(tabId) {
    return {
        type: EActionTypes.Tabs.selected,
        payload: tabId
    }
}

export function showTabs(...tabsIds){
    const tabsToShow = {}
    tabsIds.forEach(t => tabsToShow[t] = true)
    
    return{
        type: EActionTypes.Tabs.show,
        payload: tabsToShow
    }
}
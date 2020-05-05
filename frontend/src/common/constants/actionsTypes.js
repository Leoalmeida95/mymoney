const ActionTypes = {
    Dashboard: Object.freeze({
        summary: 'BILLING_SUMMARY_FETCHED'
    }),
    Tabs: Object.freeze({
        selected: 'TAB_SELECTED',
        show: 'TAB_SHOWED'
    }),
    BillingCycles: Object.freeze({
        list: 'BILLING_CYCLES_FETCHED'
    })
}

export default ActionTypes
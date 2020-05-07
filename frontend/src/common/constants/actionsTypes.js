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
    }),
    Auth: Object.freeze({
        token: 'TOKEN_VALIDATED',
        user: 'USER_FETCHED'
    })
}

export default ActionTypes
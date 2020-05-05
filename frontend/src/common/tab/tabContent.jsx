import React, {Component} from 'react'
import {connect} from 'react-redux'

import If from '../operador/if'

class TabContent extends Component{
    render(){
        const tabId = this.props.id
        const selected = this.props.tab.selected === tabId
        const active = selected || (this.props.tab.selected === '' && tabId === 'tabList')
        const visible = this.props.tab.visible[tabId]
        return(
            <If test={visible}>
                <div id={tabId} className={`tab-pane ${active ? 'active' : ''}`} >
                    {this.props.children}
                </div>
            </If>
        )
    }
}

const mapStateToProps = state =>
({tab: state.tab})

export default connect(mapStateToProps)(TabContent)
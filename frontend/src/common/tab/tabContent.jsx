import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectTab} from './tabActions'
import {bindActionCreators} from 'redux'

class TabContent extends Component{
    render(){
        const tabId = this.props.id
        const selected = this.props.tab.selected === tabId
        const active = selected || (this.props.tab.selected === '' && tabId === 'tabList')
        return(
            <div  id={tabId} 
            className={`tab-pane ${active ? 'active' : ''}`} >
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state =>
({tab: state.tab})

const mapDispatchToProps = dispacth => 
    bindActionCreators({selectTab}, dispacth)

export default connect(mapStateToProps,mapDispatchToProps)(TabContent)
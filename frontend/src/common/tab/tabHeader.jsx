import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import If from '../operador/if'
import {selectTab} from './tabActions'

class TabHeader extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const target = this.props.target
        const selected = this.props.tab.selected === target
        const active = selected || (this.props.tab.selected === '' && target === 'tabList')
        const visible = this.props.tab.visible[target]
        return(
            <If test={visible}>
                <li className={active ? 'active' : ''} >
                    <a href='javascript:;' data-toggle='tab' data-target={target} 
                    onClick={() => this.props.selectTab(target)} >
                        <i className={`fa fa-${this.props.icon}`} ></i> {this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}

const mapStateToProps = state =>
({tab: state.tab})

const mapDispatchToProps = dispacth => 
    bindActionCreators({selectTab}, dispacth)

export default connect(mapStateToProps,mapDispatchToProps)(TabHeader)
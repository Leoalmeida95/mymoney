import React, {Component} from 'react'
import {selectTab} from './tabActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class TabHeader extends Component {

    constructor(props){
        super(props)
    }

    render(){
        const target = this.props.target
        const selected = this.props.tab.selected === target
        return(
            <li className={selected ? 'active' : ''} >
                <a href='javascript:;' data-toggle='tab' data-target={target} 
                onClick={() => this.props.selectTab(target)} >
                    <i className={`fa fa-${this.props.icon}`} ></i> {this.props.label}
                </a>
            </li>
        )
    }
}

const mapStateToProps = state =>
({tab: state.tab})

const mapDispatchToProps = dispacth => 
    bindActionCreators({selectTab}, dispacth)

export default connect(mapStateToProps,mapDispatchToProps)(TabHeader)
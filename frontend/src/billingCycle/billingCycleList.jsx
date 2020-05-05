import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getList, showUpdate} from './billingCycleActions'

class BillingCycleList extends Component{

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map((l) => 
                    <tr key={l._id}>
                        <td>{l.name}</td>
                        <td>{l.month}</td>
                        <td>{l.year}</td>
                        <td>
                            <button className='btn btn-warning' onClick={() => this.props.showUpdate(l)}>
                                <i className='fa fa-pencil'></i>
                            </button>
                        </td>
                    </tr>
                )
    }

    render(){
        return(
            <table className='table' >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => (
    {list: state.billingCycle.list}
)

const mapDispatchToProps = dispacth => 
    bindActionCreators({getList, showUpdate}, dispacth)


export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
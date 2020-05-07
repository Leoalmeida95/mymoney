import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getList, showAction} from './billingCycleActions'
import ETabs from '../common/constants/tabs'
import EFormsIds from '../common/constants/formsIds'
import IconButton from '../common/form/iconButton'

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
                            <IconButton type='button' btn='warning' onClick={() => this.props.showAction(ETabs.update, EFormsIds.billingCycle, l)}
                                        icon='pencil' type='button' />
                            <IconButton type='button' btn='danger' onClick={() => this.props.showAction(ETabs.delete, EFormsIds.billingCycle, l)}
                                        icon='trash' type='button' />
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
                        <th className='table-actions' >Ações</th>
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
    bindActionCreators({getList, showAction}, dispacth)


export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)
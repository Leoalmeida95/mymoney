import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Field, arrayInsert, arrayRemove} from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import IconButton from '../common/form/iconButton'
import EFormsIds from '../common/constants/formsIds'
import If from '../common/operator/if'

class ItemList extends Component{

    add(index, item={}){
        if(!this.props.readOnly){
            this.props.arrayInsert(EFormsIds.billingCycle, this.props.field, index, item)
        }
    }

    remove(index){
        if(!this.props.readOnly && this.props.list.length > 1){
            this.props.arrayRemove(EFormsIds.billingCycle, this.props.field, index)
        }
    }

    renderRows(){
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index} >
                <td>
                    <Field name={`${this.props.field}[${index}].name`} component={Input} placeholder='Informe o Nome' 
                    readOnly={this.props.readOnly}  />
                </td>
                <td>
                    <Field name={`${this.props.field}[${index}].value`} component={Input} placeholder='Informe o Valor' 
                    readOnly={this.props.readOnly} />
                </td>
                <If test={this.props.show} >
                    <td>
                        <Field name={`${this.props.field}[${index}].status`} component={Input} placeholder='Informe o Status' 
                        readOnly={this.props.readOnly}  />
                    </td>
                </If>
                <td>
                    <IconButton btn='success' icon='plus' type='button' onClick={() => this.add(index +1)} />
                    <IconButton btn='warning' icon='clone' type='button' onClick={() => this.add(index +1, item)} />
                    <IconButton btn='danger' icon='trash' type='button' onClick={() => this.remove(index)}  />
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                <legende>{this.props.legend}</legende>
                    <table className='table' >
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={this.props.show} >
                                <th>Status</th>
                            </If>
                            <th className='table-actions' >Ações</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispacth => 
    bindActionCreators({arrayInsert, arrayRemove}, dispacth)

export default connect(null, mapDispatchToProps)(ItemList)
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Field, arrayInsert} from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import IconButton from '../common/form/iconButton'
import EFormsIds from '../common/constants/formsIds'

class CreditList extends Component{

    add(index, item={}){
        if(!this.props.readOnly){
            this.props.arrayInsert(EFormsIds.billingCycle, 'credits', index, item)
        }
    }

    renderRows(){
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index} >
                <td>
                    <Field name={`credits[${index}].name`} component={Input} placeholder='Informe o Nome' 
                readOnly={this.props.readOnly}  />
                </td>
                <td>
                    <Field name={`credits[${index}].value`} component={Input} placeholder='Informe o Valor' 
                readOnly={this.props.readOnly} />
                </td>
                <td>
                    <IconButton btn='success' icon='plus' type='button' onClick={() => this.add(index +1)} />
                    <IconButton btn='warning' icon='clone' type='button' onClick={() => this.add(index +1, item)} />
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legende>Créditos</legende>
                    <table className='table' >
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
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
    bindActionCreators({arrayInsert}, dispacth)

export default connect(null, mapDispatchToProps)(CreditList)
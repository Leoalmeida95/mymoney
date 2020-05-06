import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {clear} from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'
import EFormsIds from '../common/constants/formsIds'

class BillingCycleForm extends Component{

    render() {
        
        const {handleSubmit, readOnly} = this.props 

        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body' >
                    <Field name='name' component={labelAndInput} label='Nome' cols='12 4'
                    placeholder='Informe o Nome' type='text' readOnly={readOnly} />
                    <Field name='month' component={labelAndInput} label='Mês' cols='12 4'
                    placeholder='Informe o Mês' type='number' readOnly={readOnly}  />
                    <Field name='year' component={labelAndInput} label='Ano' cols='12 4'
                    placeholder='Informe o Ano' type='number' readOnly={readOnly}  />
                </div>
                <div className='box-footer' >
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.clear} >Cancelar</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispacth => 
    bindActionCreators({clear}, dispacth)

BillingCycleForm = reduxForm({form: EFormsIds.billingCycle, 
                            destroyOnUnmount: false //a flag é utilizada por causa do form ser usado varias vezes no crud
                                                    //e sem ela o forma não recarrega corretamente
                            })(BillingCycleForm)

export default connect(null, mapDispatchToProps)(BillingCycleForm)
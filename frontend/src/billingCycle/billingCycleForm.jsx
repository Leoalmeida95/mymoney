import React, {Component} from 'react'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {clear} from './billingCycleActions'
import LabelAndInput from '../common/form/labelAndInput'
import EFormsIds from '../common/constants/formsIds'
import IconButton from '../common/form/iconButton'
import ItemList from './itemitList'
import Summary from './summary'

class BillingCycleForm extends Component{

    calculateSummary(){
        const sum = (t,v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0)//o '+ converte value para int
                            .reduce(sum),
            sumOfDebts: this.props.debts.map(d=> +d.value || 0)
                            .reduce(sum)
        }
    }

    render() {
        
        const {handleSubmit, credits, debts, readOnly, btn, icon, type, text} = this.props 
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()

        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body' >
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4'
                    placeholder='Informe o Nome' type='text' readOnly={readOnly} />
                    <Field name='month' component={LabelAndInput} label='Mês' cols='12 4'
                    placeholder='Informe o Mês' type='number' readOnly={readOnly}  />
                    <Field name='year' component={LabelAndInput} label='Ano' cols='12 4'
                    placeholder='Informe o Ano' type='number' readOnly={readOnly}  />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' readOnly={readOnly} list={credits} field='credits' legend='Créditos' />
                    <ItemList cols='12 6' readOnly={readOnly} list={debts} field='debts' legend='Débitos' show={true} />
                </div>
                <div className='box-footer' >
                    <IconButton btn={btn}icon={icon} type={type}text={text}/>
                    <IconButton btn='default' type='button'text='Cancelar' onClick={this.props.clear} />
                </div>
            </form>
        )
    }
}


BillingCycleForm = reduxForm({form: EFormsIds.billingCycle, 
                                destroyOnUnmount: false //a flag é utilizada por causa do form ser usado varias vezes no crud
                                //e sem ela o forma não recarrega corretamente
                            })(BillingCycleForm)

const selector = formValueSelector(EFormsIds.billingCycle)
const mapDispatchToProps = dispacth => 
    bindActionCreators({clear}, dispacth)
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
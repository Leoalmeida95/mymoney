import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import BillingCycleList from './billingCycleList'
import Form from './billingCycleForm'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import {clear, create, update, remove} from './billingCycleActions'
import ETabs from '../common/constants/tabs'

class BiilingCycle extends Component {

    componentWillMount(){
        this.props.clear()
    }

    render(){
        return(
        <div>
            <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' ></ContentHeader>
            <Content >
                <Row>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target={ETabs.list} icon='bars' label='Listar' />
                            <TabHeader target={ETabs.create} icon='plus' label='Incluir' />
                            <TabHeader target={ETabs.update} icon='pencil' label='Alterar' />
                            <TabHeader target={ETabs.delete} icon='trash-o' label='Excluir' />
                        </TabsHeader> 
                        <TabsContent>
                            <TabContent id={ETabs.list} >
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id={ETabs.create} >
                                <Form onSubmit={this.props.create} btn='success' icon='plus' type='submit' text='Incluir ' />
                            </TabContent>
                            <TabContent id={ETabs.update} >
                                <Form onSubmit={this.props.update} btn='warning' icon='pencil' type='submit' text='Alterar ' />
                            </TabContent>
                            <TabContent id={ETabs.delete} >
                                <Form onSubmit={this.props.remove} readOnly={true} btn='danger' icon='trash' type='submit' text='Remover ' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Row>
            </Content>
        </div>
        )
    }
}

const mapDispatchToProps = dispacth => 
    bindActionCreators({clear, create, update, remove}, dispacth)

export default connect(null, mapDispatchToProps)(BiilingCycle)
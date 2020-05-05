import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import {selectTab, showTabs} from '../common/tab/tabActions'
import BillingCycleList from './billingCycleList'
import Form from './billingCycleForm'

class BiilingCycle extends Component {

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList','tabCreate')
    }

    render(){
        return(
        <div>
            <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' ></ContentHeader>
            <Content >
                <Row>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader target='tabList' icon='bars' label='Listar' />
                            <TabHeader target='tabCreate' icon='plus' label='Incluir' />
                            <TabHeader target='tabUpdate' icon='pencil' label='Alterar' />
                            <TabHeader target='tabDelete' icon='trash-o' label='Excluir' />
                        </TabsHeader> 
                        <TabsContent>
                            <TabContent id='tabList' >
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id='tabCreate' >
                                <Form />
                            </TabContent>
                            <TabContent id='tabUpdate' >
                                <h1>Update</h1>
                            </TabContent>
                            <TabContent id='tabDelete' >
                                <h1>Delete</h1>
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
    bindActionCreators({selectTab, showTabs}, dispacth)


export default connect(null, mapDispatchToProps)(BiilingCycle)
import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'

class BiilingCycle extends Component {
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

                        </TabsContent>
                    </Tabs>
                </Row>
            </Content>
        </div>
        )
    }
}

export default BiilingCycle
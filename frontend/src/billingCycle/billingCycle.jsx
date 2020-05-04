import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'

class BiilingCycle extends Component {
    render(){
        return(
        <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' ></ContentHeader>
                <Content >
                    <Row>
                        <Tabs>
                            <TabsHeader>

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
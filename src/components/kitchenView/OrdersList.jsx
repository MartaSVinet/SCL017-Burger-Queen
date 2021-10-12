import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Aside from '../waiterView/Aside';

const OrdersList = (props) => {
    
    return (
        <main className="lists">
            <div>
                <h2>Pedidos</h2>
                <Tabs>
                    <TabPanel>
                        <TabList>
                        <Tab>Pedidos actuales</Tab>
                        <Tab>Pedidos completados</Tab>
                        </TabList>
                    </TabPanel>
                </Tabs>
                <Tabs>
                    <TabPanel>
                        <TabList>
                            <Tab>
                                <div>
                                {props.Aside}
                                </div>
                            </Tab>   
                        </TabList>      
                    </TabPanel>
                </Tabs>
            </div>
        </main>
    )


}

export default OrdersList;
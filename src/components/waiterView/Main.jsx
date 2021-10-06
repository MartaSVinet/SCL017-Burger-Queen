import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Breakfast from './menus/Breakfast';
import Burger from './menus/Burger';
import Drink from './menus/Drink';
import Sidedish from './menus/Sidedish';

const Main = (props) => {
  const { handleInputChange, submitCustomerName, breakfasts, burgers, sidedishes, drinks, add } = props;

  return (
    <main className="block col-bigger">
      <div>
        <form onSubmit={submitCustomerName}>
          <input type="text" placeholder="Escribe aquí el nombre del cliente..." name="aName" onChange={handleInputChange} className="inputClient"/>
        </form>
      </div>
      <div>
        <h2>Menús</h2>
        <Tabs>
          <TabList>
            <Tab>Desayuno</Tab>
            <Tab>Resto del día</Tab>
          </TabList>
          <TabPanel>
            <div className="row">
              {breakfasts.map((breakfast) => (
                <Breakfast key={breakfast.id} breakfast={breakfast} add={add}/>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList>
                <Tab>Hamburguesas</Tab>
                <Tab>Acompañamientos</Tab>
                <Tab>Bebidas</Tab>
              </TabList>
              <TabPanel>
                <div className="row">
                  {burgers.map((burger) => (
                    <Burger key={burger.id} burger={burger} add={add}/>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">
                  {sidedishes.map((sidedish) => (
                    <Sidedish key={sidedish.id} sidedish={sidedish} add={add}/>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">
                  {drinks.map((drink) => (
                    <Drink key={drink.id} drink={drink} add={add}/>
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
}

export default Main;

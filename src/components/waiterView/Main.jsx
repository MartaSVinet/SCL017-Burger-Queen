import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Breakfast from './menus/Breakfast';
import Burger from './menus/Burger';
import Drink from './menus/Drink';
import Sidedish from './menus/Sidedish';

const Main = (props) => {
  const { breakfasts, burgers, sidedishes, drinks } = props;

  return (
    <main>
      <div>
        <form>
          <span>Nombre del cliente: </span>
          <input type="text"/>
          <input type="submit" value="Adjuntar al detalle"/>
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
            <div>
              {breakfasts.map((breakfast) => (
                <Breakfast key={breakfast.id} breakfast={breakfast}/>
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
                <div>
                  {burgers.map((burger) => (
                    <Burger key={burger.id} burger={burger}/>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  {sidedishes.map((sidedish) => (
                    <Sidedish key={sidedish.id} sidedish={sidedish}/>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div>
                  {drinks.map((drink) => (
                    <Drink key={drink.id} drink={drink}/>
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

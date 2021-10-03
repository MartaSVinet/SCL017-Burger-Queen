import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Main = () => {
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
            Aquí val el menú Desayunos!!
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList>
                <Tab>Hamburguesas</Tab>
                <Tab>Acompañamientos</Tab>
                <Tab>Bebidas</Tab>
              </TabList>
              <TabPanel>
                Aquí va el menú Hamburguesas!!
              </TabPanel>
              <TabPanel>
                Aquí va el menú Acompañamientos!!
              </TabPanel>
              <TabPanel>
                Aquí va el menú Bebidas!!
              </TabPanel>
            </Tabs>
          </TabPanel>
        </Tabs>
      </div>
    </main>
  );
}

export default Main;

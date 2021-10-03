import React from 'react';
import './waiterViewStyle.css';
import Aside from './Aside';
import Header from './Header';
import Main from './Main';

const WaiterView = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main />
        <Aside />
      </div>
    </div>
  );
}

export default WaiterView;

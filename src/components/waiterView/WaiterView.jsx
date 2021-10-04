import React from 'react';
import Aside from './Aside';
import Header from './Header';
import Main from './Main';
import data from '../../data';
import './waiterViewStyle.css';

const WaiterView = () => {
  const { breakfasts } = data;

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main breakfasts={breakfasts} />
        <Aside />
      </div>
    </div>
  );
}

export default WaiterView;

import React from 'react';
import Aside from './Aside';
import Header from './Header';
import Main from './Main';
import data from '../../data';
import './waiterViewStyle.css';

const WaiterView = () => {
  const { breakfasts } = data;
  const { burgers } = data;
  const { sidedishes } = data;
  const { drinks } = data;

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main breakfasts={breakfasts} burgers={burgers} sidedishes={sidedishes} drinks={drinks}/>
        <Aside />
      </div>
    </div>
  );
}

export default WaiterView;

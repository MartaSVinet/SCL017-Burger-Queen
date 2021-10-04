import React, { useState } from 'react';
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

  const [orderItems, setOrderItems] = useState([]);

  const add = (article) => {
    const exist = orderItems.find(anItem => anItem.id === article.id);
    if (exist) {
      setOrderItems(
        orderItems.map((anItem) => 
          anItem.id === article.id ? {...exist, quantity: exist.quantity + 1} : anItem
        )
      );
    } else {
      setOrderItems([...orderItems, { ...article, quantity: 1 }]);
    }
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Main add={add} breakfasts={breakfasts} burgers={burgers} sidedishes={sidedishes} drinks={drinks}/>
        <Aside add={add} orderItems={orderItems}/>
      </div>
    </div>
  );
}

export default WaiterView;

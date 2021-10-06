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
  
  const [customerName, setCustomerName] = useState({aName: ''});

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

  const remove = (article) => {
    const exist = orderItems.find(anItem => anItem.id === article.id);
    if (exist.quantity === 1) {
      setOrderItems(orderItems.filter((anItem) => anItem.id !== article.id));
    } else {
      setOrderItems(
        orderItems.map((anItem) => 
          anItem.id === article.id ? {...exist, quantity: exist.quantity - 1} : anItem
        )
      );
    }
  }

  const handleInputChange = (e) => {
    setCustomerName({
      ...customerName,
      [e.target.name] : e.target.value
    });
  }

  const submitCustomerName = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="row">
        <Main handleInputChange={handleInputChange} submitCustomerName={submitCustomerName} add={add} breakfasts={breakfasts} burgers={burgers} sidedishes={sidedishes} drinks={drinks}/>
        <Aside customerName={customerName} add={add} remove={remove} orderItems={orderItems}/>
      </div>
    </div>
  );
}

export default WaiterView;

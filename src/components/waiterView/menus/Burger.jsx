import React from 'react';

const Burger = (props) => {
  const { burger, add } = props;

  return (
    <div>
      <img src={burger.image} alt={burger.name} className="itemImg"/>
      <h3 className="itemName">{burger.name}</h3>
      <p className="itemPrice">${burger.price}</p>
      <div>
        <button className="btn" onClick={() => add(burger)}>Agregar</button>
      </div>
    </div>
  );
}

export default Burger;

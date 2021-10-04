import React from 'react';

const Drink = (props) => {
  const { drink, add } = props;

  return (
    <div>
      <img src={drink.image} alt={drink.name} className="itemImg"/>
      <h3 className="itemName">{drink.name}</h3>
      <p className="itemPrice">${drink.price}</p>
      <div>
        <button onClick={() => add(drink)}>Agregar</button>
      </div>
    </div>
  );
}

export default Drink;

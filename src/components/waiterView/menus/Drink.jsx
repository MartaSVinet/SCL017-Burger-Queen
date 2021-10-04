import React from 'react';

const Drink = (props) => {
  const { drink } = props;

  return (
    <div>
      <img src={drink.image} alt={drink.name}/>
      <h3>{drink.name}</h3>
      <p>${drink.price}</p>
      <div>
        <button>Agregar</button>
      </div>
    </div>
  );
}

export default Drink;

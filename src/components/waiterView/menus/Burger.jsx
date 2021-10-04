import React from 'react';

const Burger = (props) => {
  const { burger } = props;

  return (
    <div>
      <img src={burger.image} alt={burger.name}/>
      <h3>{burger.name}</h3>
      <p>${burger.price}</p>
      <div>
        <button>Agregar</button>
      </div>
    </div>
  );
}

export default Burger;

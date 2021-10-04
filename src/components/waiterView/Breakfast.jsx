import React from 'react';

const Breakfast = (props) => {
  const { breakfast } = props;

  return (
    <div>
      <img src={breakfast.image} alt={breakfast.name}/>
      <h3>{breakfast.name}</h3>
      <p>${breakfast.price}</p>
      <div>
        <button>Agregar</button>
      </div>
    </div>
  );
}

export default Breakfast;

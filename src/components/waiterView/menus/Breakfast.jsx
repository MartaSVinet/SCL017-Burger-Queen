import React from 'react';

const Breakfast = (props) => {
  const { breakfast, add } = props;

  return (
    <div>
      <img src={breakfast.image} alt={breakfast.name}/>
      <h3>{breakfast.name}</h3>
      <p>${breakfast.price}</p>
      <div>
        <button onClick={() => add(breakfast)}>Agregar</button>
      </div>
    </div>
  );
}

export default Breakfast;

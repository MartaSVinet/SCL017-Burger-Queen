import React from 'react';

const Sidedish = (props) => {
  const { sidedish, add } = props;

  return (
    <div>
      <img src={sidedish.image} alt={sidedish.name}/>
      <h3>{sidedish.name}</h3>
      <p>${sidedish.price}</p>
      <div>
        <button onClick={() => add(sidedish)}>Agregar</button>
      </div>
    </div>
  );
}

export default Sidedish;

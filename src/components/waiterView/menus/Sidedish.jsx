import React from 'react';

const Sidedish = (props) => {
  const { sidedish, add } = props;

  return (
    <div>
      <img src={sidedish.image} alt={sidedish.name} className="itemImg"/>
      <h3 className="itemName">{sidedish.name}</h3>
      <p className="itemPrice">${sidedish.price}</p>
      <div>
        <button onClick={() => add(sidedish)}>Agregar</button>
      </div>
    </div>
  );
}

export default Sidedish;

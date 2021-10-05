import React from 'react';

const Breakfast = (props) => {
  const { breakfast, add } = props;

  return (
    <div>
      <img src={breakfast.image} alt={breakfast.name} className="itemImg"/>
      <h3 className="itemName">{breakfast.name}</h3>
      <p className="itemPrice">${breakfast.price}</p>
      <div>
        <button className="btn" onClick={() => add(breakfast)}>Agregar</button>
      </div>
    </div>
  );
}

export default Breakfast;

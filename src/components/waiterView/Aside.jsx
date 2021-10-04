import React from 'react';

const Aside = (props) => {
  const { orderItems, add, remove } = props;
  const itemsTotalPrice = orderItems.reduce((acumulator, currentItem) => acumulator + currentItem.price * currentItem.quantity, 0);

  return (
    <aside className="col-smaller">
      <h2>Detalle del Pedido:</h2>
      <div>
        {orderItems.length === 0 && <div>Cero ítems.</div>}
      </div>
      {orderItems.map((item) => (
        <div key={item.id} className="row center">
          <div className="col-smaller">{item.name}</div>
          <div className="col-smaller">
            <button onClick={() => add(item)}>+</button>
            <button onClick={() => remove(item)}>-</button>
          </div>
          <div className="col-smaller">
            {item.quantity} x ${item.price}
          </div>
        </div>
      ))}
      {orderItems.length !== 0 && (
        <div>
          <hr/>
          <div className="row center">
            <h3 className="col-smaller">Total:</h3>
            <div className="col-smaller">${itemsTotalPrice}</div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Aside;

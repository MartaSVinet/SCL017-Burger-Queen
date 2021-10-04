import React from 'react';

const Aside = (props) => {
  const { orderItems, add, remove } = props;
  const itemsTotalPrice = orderItems.reduce((acumulator, currentItem) => acumulator + currentItem.price * currentItem.quantity, 0);

  return (
    <aside>
      <h2>Detalle del Pedido:</h2>
      <div>
        {orderItems.length === 0 && <div>Cero ítems.</div>}
      </div>
      {orderItems.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>
            <button onClick={() => add(item)}>+</button>
            <button onClick={() => remove(item)}>-</button>
          </div>
          <div>
            {item.quantity} x ${item.price}
          </div>
        </div>
      ))}
      {orderItems.length !== 0 && (
        <div>
          <hr/>
          <div>
            <h3>Total:</h3>
            <div>${itemsTotalPrice}</div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Aside;

import React from 'react';

const Aside = (props) => {
  const { orderItems, add, remove } = props;

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
    </aside>
  );
}

export default Aside;

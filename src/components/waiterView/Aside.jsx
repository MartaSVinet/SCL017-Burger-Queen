import React from 'react';

const Aside = (props) => {
  const { orderItems, add, remove } = props;
  const itemsTotalPrice = orderItems.reduce((acumulator, currentItem) => acumulator + currentItem.price * currentItem.quantity, 0);
  const totalOrder = {...orderItems, total: itemsTotalPrice};
  const orderId = 'order-'.concat(Date.now());
  const confirm = () => {
    window.localStorage.setItem(orderId, JSON.stringify(totalOrder));
  };

  return (
    <aside className="block col-smaller">
      <h2>Detalle del Pedido:</h2>
      <div>
        {orderItems.length === 0 && <div>Cero ítems.</div>}
      </div>
      {orderItems.map((item) => (
        <div key={item.id} className="row center">
          <div className="col-smaller">{item.name}</div>
          <div className="col-smaller">
            <button onClick={() => add(item)} className="btn addIt">+</button>
            <button onClick={() => remove(item)} className="btn removeIt">-</button>
          </div>
          <div className="col-smaller text-right">
            {item.quantity} x ${item.price}
          </div>
        </div>
      ))}
      {orderItems.length !== 0 && (
        <div>
          <hr/>
          <div className="row center">
            <h3 className="col-smaller text-right">Total:</h3>
            <div className="col-smaller text-right">${itemsTotalPrice}</div>
            <div>
              <button onClick={() => confirm()}>Confirmar pedido</button>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Aside;


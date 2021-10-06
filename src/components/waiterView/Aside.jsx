import React from 'react';

const Aside = (props) => {
  const { orderItems, add, remove, customerName } = props;

  const itemsTotalPrice = orderItems.reduce((acumulator, currentItem) => acumulator + currentItem.price * currentItem.quantity, 0);
  
  const orderSummary = {...orderItems, totalPrice: itemsTotalPrice, customerId: customerName.aName};
  const orderId = 'order-'.concat(Date.now());

  const submitOrderToLocalStorage = () => {
    window.localStorage.setItem(orderId, JSON.stringify(orderSummary));
    window.location.reload();
  }


  return (
    <aside className="block col-smaller">
      <h2>Detalle del Pedido:</h2>
      <div>
        {customerName.aName !== '' && <p><b>Nombre del cliente:</b><br/> {customerName.aName}.</p>}
      </div>
      <div>
        {orderItems.length === 0 && <p><b>Cero ítems.</b></p>}
        {orderItems.length !== 0 && <p><b>Lista de productos:</b></p>}
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
          </div>
          <div>
            <button onClick={() => submitOrderToLocalStorage()} className="btn sendIt">ENVIAR A COCINA</button>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Aside;

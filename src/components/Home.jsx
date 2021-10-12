import React from 'react';
import { withRouter } from 'react-router';

const Home = (props) => {

  const toWaiterView = () => {
    props.history.push('/waiter')
  }

  return (
    <div>
      <div>
        <img src="" alt=""/>
        <h1>Burger Queen</h1>
      </div>
      <div>
        <h2>¡Bienvenid@!</h2>
        <p>¿Cuál es tu rol?</p>
        <button onClick={toWaiterView}>Meser@</button>
        <button>Cociner@</button>
      </div>
    </div>
  );
}

export default withRouter(Home);

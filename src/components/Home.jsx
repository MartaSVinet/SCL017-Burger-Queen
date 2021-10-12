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
        <div>
          <img src="../images/waiter.png" alt=""/>
          <button onClick={toWaiterView}>Meser@</button>         
        </div>
        <div>
          <img src="../images/chef.png" alt=""/>
          <button>Cociner@</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);

import React from 'react';
import { withRouter } from 'react-router';

const Home = (props) => {

  const toWaiterView = () => {
    props.history.push('/waiter')
  }

  return (
    <div className="card-home">
      <div>
        <h1 className="txt-home title">Burger Queen</h1>
      </div>
      <div>
        <h2 className="txt-home subtitle">¿Cuál es tu rol?</h2>
        <div className="boxes-container-home">
          <div className="boxes-each-home">
            <img src="../images/waiter.png" alt=""/><br/>
            <button onClick={toWaiterView} className="btns-each">Meser@</button>         
          </div>
          <div className="boxes-each-home">
            <img src="../images/chef.png" alt=""/><br/>
            <button className="btns-each">Cociner@</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);

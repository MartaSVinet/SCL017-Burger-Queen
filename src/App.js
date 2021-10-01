import React from 'react';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import WaiterView from './components/waiterView/WaiterView';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/waiter">
          <WaiterView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

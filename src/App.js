import React from 'react';
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
        <Route path="/" exact>
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

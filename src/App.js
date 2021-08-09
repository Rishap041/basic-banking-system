import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './Container/Home';
import About from './Container/About';
import Contact from './Container/Contact';
import Navbar from './Container/Navbar';
import AddUser from './Container/AddUser';
import ViewConsumer from './Container/ViewConsumer';
import Transfer from './Container/Transfer';
import PageNotFound from './Container/PageNotFound';
import TransactionHistory from './Container/TransactionHistory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/AddUser" component={AddUser} />
            <Route exact path="/ViewConsumer" component={ViewConsumer} />
            <Route exact path="/transfer" component={Transfer} />
            <Route exact path="/TransactionHistory" component={TransactionHistory} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;

import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch,Route, Link} from "react-router-dom";
import History from './History.js';
import Home from './Home.js';
import Header from './Header.js';


class App extends Component { 
render(){
  return (
    <Router>
      <div className="App">
          <Header />
          <Switch>
              <Route exact path="/" component ={Home} />
              <Route path="/our-history" component ={History} />
          </Switch>
      </div>
    </Router>
  );
}
}

export default App;

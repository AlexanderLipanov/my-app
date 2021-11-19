import './App.css';
import Template from './Template';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Registration from './Registration';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    
  }

  

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/Registration' component={Registration} />
            <Route path='/Chat' component={Template} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
// token = f81c8dbd7c61ca59eb48cfc870ec332bab600a6ac5681c28ebee4fa3b453cb6bbf393b820a1a1631fa5f0
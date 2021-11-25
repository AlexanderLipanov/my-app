import './App.css';
import Template from './AuthAndTemplate/Template';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './AuthAndTemplate/Home';
import Registration from './AuthAndTemplate/Registration';
import React from 'react';

function App() {

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


export default App;

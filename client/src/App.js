import React,  { Component } from "react";
// import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginScreen } from "./Components/login";
import { RegisterScreen } from "./Components/register";
import { StockScreen } from "./Components/Stock";

export default class App extends Component {
  
  render() {
    return (
      <div>
      <Router>
        <Switch>
        <Route path="/stock" component={StockScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        </Switch>
      </Router>
      </div>
    );
    }
}



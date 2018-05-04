import React, { Component } from 'react';
import './App.css';
import Startpage from './Startpage';
import { Route } from 'react-router-dom';
import Portfolio from './Portfolio';
 
// using CommonJS modules

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: "Anna Eklund"
    }
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Startpage}/>
        <Route path="/portfolio" component={Portfolio}/>
      </div>
    );
  }
}

export default App;

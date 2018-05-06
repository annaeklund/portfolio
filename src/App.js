import React, { Component } from 'react';
import './App.css';
import Startpage from './Startpage';
import { Route } from 'react-router-dom';
import Work from './Work';
import DM2601 from './DM2601';
import DH2642react from './DH2642react';
import DM2350 from './DM2350';
import DH2642vue from './DH2642vue';
 
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
        <Route path="/work" component={Work}/>
        <Route path="/DM2601" component={DM2601} />
        <Route path="/DM2350" component={DM2350} />
        <Route path="/DH2642vue" component={DH2642vue} />
        <Route path="/DH2642react" component={DH2642react} />
      </div>
    );
  }
}

export default App;

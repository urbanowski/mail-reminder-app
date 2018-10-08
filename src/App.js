import React, { Component } from 'react';
import {CompaniesList} from './CompaniesList';
import './App.css';


class App extends Component {
  constructor(){
    super();

    const companiesDb = [
      {id: 1, name: "Ford Polska", email: "ford@wp.pl"},
      {id: 2, name: "Fiat Italy", email: "fiat@wp.pl"},
      {id: 3, name: "Audi Niemcy", email: "audi@wp.pl"}
    ]

    this.state = {
      companies: companiesDb
    }
  }
  
  
  render() {
    return (
      <div className="App">
        <CompaniesList companies = {this.state.companies}/>
      </div>
    );
  }
}

export default App;

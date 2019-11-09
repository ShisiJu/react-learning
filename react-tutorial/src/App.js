import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './comps/temp/Table';

class App extends Component {
  render() {

    let arr = ["nihao", "hello"];
    return (
      <div className="App">
        <Table arr={arr}></Table>
      </div>
    );
  }
}

export default App;

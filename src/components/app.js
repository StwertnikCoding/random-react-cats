import React, { Component } from 'react';
import axios from 'axios';

import Home from "./pages/home";
export default class App extends Component {



  render() {
    return (
      <div className='container'>
        <Home />
      </div>
    );
  }
}

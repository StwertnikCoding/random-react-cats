import React, { Component } from 'react';

import MockBar from '../navigation/mock-bar';
import CatImageContainer from '../columns/cat-image-container';



export default class Home extends Component {
  render() {
    return (
      <div>
      
        <div>
            <MockBar />
        </div>

        <div>
            <CatImageContainer />
        </div>

    </div>
    );
     
  }
}
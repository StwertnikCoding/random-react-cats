import React, { Component } from 'react';
import axios from 'axios';

import CatImage from './parts/cat-image';

export default class CatImageContainer  extends Component {
  constructor () {
    super();

    this.state = {
      pageTitle: "Random Cat",
      isLoading: false,
      data: []
    };
    
    this.handleRandomize = this.handleRandomize.bind(this);
  }

    handleRandomize() {
      this.getCatImages();
    }


  getCatImages() {
    axios.get("https://api.thecatapi.com/v1/images/search")
    .then(response => {
      
      this.setState({
        data: response.data[0].url
      })
    })
    .catch(error =>  {
      console.log(error);
    })
  }

  CatImages() {
    return (this.state.data);
  }

  componentDidMount() {
    this.getCatImages();
  }
  render() {

    return (
      <div>
        <div className="cat-image-wrapper">
          <img src={this.state.data}></img>  
        </div>

        <div className="cat-btn-wrapper">
          <button className='cat-btn' onClick={() => this.handleRandomize()}>New Cat</button>
        </div>

        
        {this.CatImages()}
      </div>
    );
  } 
}
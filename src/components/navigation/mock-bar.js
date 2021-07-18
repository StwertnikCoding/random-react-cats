import React, { Component } from 'react';

export default class MockBar extends Component {
  render() {
    return (
      <div className="mockbar-wrapper">
        <div className="home-heading-wrapper">
            <h1>
                Home
            </h1>
        </div>

        <div className="cats-heading-wrapper">
            <h1>
                Cats, with React!
            </h1>
        </div>

        <div className="name-heading-wrapper">
          <h1>
              Tyler Stwertnik
          </h1>
        </div>
      </div>
    );
  }
}
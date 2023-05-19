import React, { Component } from 'react';

class ColorSquares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedSquareActive: true,
      isBlueSquareActive: false
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isRedSquareActive: !prevState.isRedSquareActive,
      isBlueSquareActive: !prevState.isBlueSquareActive
    }));
  };

  render() {
    const { isRedSquareActive, isBlueSquareActive } = this.state;

    return (
      <div>
        <div
          className={`square ${isRedSquareActive ? 'red' : 'blue'}`}
          onClick={this.handleClick}
        ></div>
        <div
          className={`square ${isBlueSquareActive ? 'red' : 'blue'}`}
          onClick={this.handleClick}
        ></div>
      </div>
    );
  }
}

export default ColorSquares;

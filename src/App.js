import React, { Component } from 'react';
import Snake from './snake';
import Food from './Food';

function randomDot() {
  let x = Math.floor((Math.random() * (9 - 1 + 1) + 1) / 2) * 2;
  let y = Math.floor((Math.random() * (9 - 1 + 1) + 1) / 2) * 2;
  return [x, y];
}

const initialState = {
  targetDot: randomDot(),
  speedOfSnake: 0,
  snakecords: [[0, 0], [0, 0]]
};

class App extends Component {
  state = initialState;

  componentDidMount() {
    document.onkeydown = this.onDirectionKeyPress;
    this.setState({speedOfSnake: 2});
    setInterval(this.snakeRunForDot, this.state.speedOfSnake);
    this.setState({directionOfSnake: 'right'});
  }

  snakeRunForDot = () => {
    const listOfDots = [...this.state.snakecords];
    let headeOfSnake = listOfDots[listOfDots.length - 1];
   
    switch (this.state.directionOfSnake) {
      case 'down': {
        headeOfSnake = [headeOfSnake[0], headeOfSnake[1] + 2];
          break;
      }
        
      case 'up':{
        headeOfSnake = [headeOfSnake[0], headeOfSnake[1] - 2]
      }

      case 'right':{
        headeOfSnake = [headeOfSnake[0] + 2, headeOfSnake[1]];
        break;
      }
        
      case 'left': {
         headeOfSnake = [headeOfSnake[0] - 2, headeOfSnake[1]];
        break;
      }
       
    }
    listOfDots.push(headeOfSnake);
    listOfDots.shift();
    this.setState({
      snakecords: listOfDots
    });
  };

  onDirectionKeyPress = keyEvent => {
    keyEvent = keyEvent || window.event;
    switch (keyEvent.keyCode) {
      case 40:  {
        this.setState({ direction: 'down' });
        break;
      }
      case 38:  {
        this.setState({ direction: 'up' });
        break;
      }
      case 37: {
        this.setState({ direction: 'left' });
        break;
      }
      case 39:{
        this.setState({ direction: 'right' });
        break;
      }
        
    }
  };

  checkIfSnakeOutOfBorders() {
    const head = this.state.snakecords[this.state.snakecords.length - 1];
    if (head[0] >= 250 || head[1] >= 250 || head[0] < 0 || head[1] < 0) {
      this.setState(initialState);
      console.error('Your game is over')
    }
  }

  render() {
    return (
      <div className="array">
        <Snake snakecords={this.state.snakecords} />
        <Food cord={this.state.targetDot} />
      </div>
    );
  }
}

export default App;

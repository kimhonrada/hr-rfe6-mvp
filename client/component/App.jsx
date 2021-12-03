import React from 'react';
import axios from 'axios';
import Fridge from './Fridge.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: []
    }
    this.getFood = this.getFood.bind(this)
  }

  componentDidMount() {
    this.getFood();
  }

  getFood() {
    axios.get("/food")
      .then((result) => {
        this.setState({ food: result.data.slice(0, 9) })
        console.log(this.state.food)
      }).catch((err) => {
        console.log(err)
      });
  }


  render() {
    return (
      <Fridge getFood={this.getFood} food={this.state.food} />
    )
  }
}

export default App;
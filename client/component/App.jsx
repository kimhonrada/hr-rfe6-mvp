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
        console.log('this is the result in app.jsx ', result)
      }).catch((err) => {
        console.log(err)
      });
  }


  render() {
    return (
      <Fridge />
    )
  }
}

export default App;
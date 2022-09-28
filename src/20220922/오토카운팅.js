import './App.css';
import React, { Component } from 'react';
import Movie from './Movie';

class App extends Component {
  state = {
    count: 0
  }
  increaseCount = () => {
    this.setState({ count: this.state.count + 1})
  }
  componentDidMount(){
    this.countID = setInterval(
      this.increaseCount
    , 1000)
  }
  componentWillUnmount(){
    clearInterval(this.countID)
  }
  render(){
    const { count } = this.state
    return (
      <div className="App">
        <h1>Increase count automatically !</h1>
        <h2>{ count }</h2>
      </div>
    );
  }
}

export default App;
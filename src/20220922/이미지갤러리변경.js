import './App.css';
import { Component } from 'react';
import animals from './dummyData'

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
    const animal = animals[count%animals.length]
    console.log(animal)
    return (
      <div className="App">
        <h1>Image Gallery !</h1>
        <img src={animal.src} alt={animal.title}></img>
      </div>
    );
  }
}

export default App;
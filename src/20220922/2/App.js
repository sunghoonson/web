import './App.css';
import React, { Component } from 'react';
import Movie from './Movie';

class App extends Component {
  state = {
    count: ['','','','','','']
  }
   increaseCount = () => {
    let arr = this.state.count
    for(let i = 0; i<arr.length; i++){
      arr[i] = this.pickRandomNumber(1,45).toString() + " "
      for(let j = 0; j<i; j++){
        if(arr[j]===arr[i]){
          arr[i] = this.pickRandomNumber(1,45).toString() + " "          
        }     
      }
      
    }
     this.setState({ count: arr})
   }
  pickRandomNumber = (min, max) => {
    return Math.floor( Math.random() * (max-min+1) ) + min
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
    console.log(count)
    return (
      <div className="App">
        <h1>로또번호 자동 생성기</h1>
        <h2>{ count }</h2>
      </div>
    );
  }
}

export default App;
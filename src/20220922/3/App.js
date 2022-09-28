import './App.css';
import React, { Component } from 'react';
import Movie from './Movie';

import words from './20220922/3/dummyData'
import Button from './20220915/Button'

class App extends Component {
  state = {    
    words: words,
    text:''
  }
   randomSelectWord = () => {
    let randomNum = this.pickRandomNumber(0,words.length-1)
    let arr = this.state.words[randomNum]    
     this.setState({text:arr})

   }
  pickRandomNumber = (min, max) => {
    return Math.floor( Math.random() * (max-min+1) ) + min
  } 

  componentDidMount(){
    this.countID = setInterval(
      this.randomSelectWord
    , 1000)
  }
  componentWillUnmount(){
    clearInterval(this.countID)
  }
  render(){
    const { words,text } = this.state
    console.log(text)
    return (
      <div className="App">
        <h1>영어 단어 랜덤 출력</h1>                
        <h2>{text.word}</h2>        
        <h2>{text.meaning}</h2>       
      </div>
    );
  }
}

export default App;
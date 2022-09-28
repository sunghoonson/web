import './App.css';
import React, { Component } from 'react';
import words from './20220922/dummyData copy'
import Button from './20220915/Button'

class App extends Component {
  state = {
    words: words
  }
  handleRemove = (id, e) => {
    const word = e.target.previousSibling.innerText
    console.log(word)
    console.log(id)
    confirm(`You want to delete word - ?`)
    const remove = window.confirm(`You want to delete word - ${word}?`)
    
    if(remove === true){
        alert("삭제 성공")
        const words = this.state.words.filter( (w, index) => index !== id ) // 제거하려는 단어의 id 와 일치하는 요소만 걸러냄
        this.setState({words})
    }else{
        alert("삭제 실패")
    }
    
  }
  
  render(){
    const { words } = this.state
    const wordStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    return (
      <div>
        <h1 style={{textAlign:'center'}}>Word List</h1>
        {words.map( (w, id) => {
          return (
            <div key={id} style={wordStyle}>
                <h2>{w.word}</h2>
                <Button size="small" type="button" handleClick={(e) => this.handleRemove(id, e)}>DELETE</Button>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
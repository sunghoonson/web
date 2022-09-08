import React, { Component } from 'react';
import Todo from './20220818/Todo';
// import Animal from './20220818연습문제/Animal'
import './App.css';

class App extends Component {
  render(){    
    const users = [
      {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
      {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
      {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
      {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
      {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
      {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
      {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
      {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
      {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
      {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
  ]
  function test1(friends) {
    let arr = []
    for (let i = 0; i < friends.length; i++) {
      const friendUI = (
        <>
          <h4 key={i}>{friends[i].name}({friends[i].age})</h4>   
          <h4 key={i+friends.length}>{friends[i].city}</h4>   
             <h4>{friends[i].email}</h4> 
        </>
      )        
      let words = friends[i].email    
      let words_e = words.includes('@')           
      let words_com = words.includes('.com')         
      if (friends[i].age>0 && Number.isInteger(friends[i].age) && words_e && words_com) {
        arr.push(friendUI)
        arr.push("------------------------")          
      }                   
    }    
    return arr
}      
  return (          
    <>
    <div className='App'>
        {test1(users)}
        </div>
      </>
  )     
}
}
export default App;
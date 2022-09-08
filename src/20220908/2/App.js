// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

const App = () => {
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
  return (
    <div className='App'>
      <h1>*유효한 사용자 정보*</h1>
      {words.map(word => {
        return (
          <div class="item" style={itemStyle}>
              <div class="word"><a href={word.r_link}>{word.r_word}<sup>{word.r_seq}</sup> ({word.r_chi})</a> - {word.r_pos}</div>
              <p class="description">{word.r_des}</p>
          </div>
        )
      })}
    </div>
  )
}
  
export default App;
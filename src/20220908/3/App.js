import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    friends: [
      {name: 'victoria', age: 13, city: 'seoul'},
      {name: 'sun', age: 34, city: 'busan'},
      {name: 'johseb', age: 25, city: 'busan'},
      {name: 'syleemomo', age: 9, city: 'seoul'},
      {name: 'hannah', age: 41, city: 'daegu'},
      {name: 'shara', age: 37, city: 'seoul'},
      {name: 'martin', age: 28, city: 'daegu'},
      {name: 'gorgia', age: 39, city: 'seoul'},
      {name: 'nana', age: 24, city: 'busan'},
      {name: 'dannel', age: 19, city: 'seoul'},
    ],
    updatedFriends: null
  }
  // 구현하기
  filterCity = (city) => {
    let arr = this.state.friends
    //console.log(arr)
    let result = [] 
    if(city === ''){
      result = arr
    }
    else result = arr.filter(arr => arr.city===city);
    this.setState({updatedFriends:result})
    //console.log(result)    
  }  

  // 구현하기
  render(){
    let { friends, updatedFriends } = this.state 
    let arr=[]
    if(updatedFriends === null){
      arr = friends
    }else{
      arr=updatedFriends
    }
    return (
      <>
      <div className='App'>
        <button onClick={() => this.filterCity("")}>전체</button>
        <button onClick={() => this.filterCity("seoul")}>서울</button>
        <button onClick={() => this.filterCity("busan")}>부산</button>
        <button onClick={() => this.filterCity("daegu")}>대구</button>
        <h1>필터링된 사용자 조회</h1>          
        {arr.map(arr => {
          return(
            <>
            <h2 key={arr.name}> 이름 : {arr.name} 나이 : {arr.age} 지역 : {arr.city}</h2>
            </>
          )          
        })}
      </div>
      </>
    ) 
  }
}

export default App;
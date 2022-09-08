import React, { Component } from 'react';
import CommentFilter from './20220824연습문제/5/CommentFilter';
import './App.css';

// state : 컴포넌트 내부(파일내부)에서 변경하고 싶은 데이터
//        : 웹페이지에서 업데이트가 되었으면 하는 데이터

// props : 컴포넌트 내부(파일내부)에서 변경되지 않는 데이터
//        : 컴포넌트 외부에서 전달받아서 화면에 그대로 렌더링만 하고 싶은 데이터
//        : 컴포넌트 외부에서는 변경이 될 수 있음

// 리액트의 장점 : 실시간으로 업데이트가 자주 일어나는 웹사이트인 경우에 장점
//              : 왜냐하면 cpu 자원을 적게 소모하기 때문임
//              : 일자리 현황판 그래프 (1초마다 업데이트되는 그래프)
//              : 대규모 프로젝트에서 장점 (컴포넌트를 재활용하기 때문)

// 1. App 컴포넌트의 render 메서드 호출
// 2. 이벤트핸들러 함수에서 setState 함수 호출
// 3. App 컴포넌트의 render 메서드 재호출
// 4. 자식컴포넌트의 render 메서드 재호출

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
    console.log(arr)
    let result = [] 
    if(city === ''){
      result = arr
    }
    else result = arr.filter(arr => arr.city===city);
    this.setState({updatedFriends:result})
    console.log(result)    
  }
  
  // 구현하기
  displayfirst(a) {
    // console.log(this.state.friends)
    let text = []     
      for (let i = 0; i < a.length; i++) {
        text[i] = <>
        <h2 key={i}> 이름 : {a[i].name} 나이 : {a[i].age} 지역 : {a[i].city}</h2>
            </>
      }   
    return text
  }

  render(){    
    let { friends, updatedFriends } = this.state 

    return (
      <>
      <div className='App'>
      <button onClick={() => this.filterCity("")}>전체</button>
        <button onClick={() => this.filterCity("seoul")}>서울</button>
        <button onClick={() => this.filterCity("busan")}>부산</button>
        <button onClick={() => this.filterCity("daegu")}>대구</button>        
           <h1>필터링된 사용자 조회</h1>
              {this.displayfirst(updatedFriends === null?  friends : updatedFriends)}
           
        </div>
      </>
    ) 
  }
}

export default App;
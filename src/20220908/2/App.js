import React, { Component } from 'react';
import CommentFilter from './20220824연습문제/5/CommentFilter';
import './App.css';
import MovieList from './20220908/MovieList';
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

// import logo from './logo.svg';

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
function selectUser(){
  let arr =users.filter(user => user.age>=0 && Number.isInteger(user.age))
  arr = arr.filter(user => user.email.indexOf('@') !== -1 && user.email.indexOf('.com') !== -1 )  
  return arr
}
let arr = selectUser()
  return (     
    <div className='App'>
      <h1>*유효한 사용자 정보*</h1>     
      {arr.map( arr =>{
        return(
          <div key = {arr.name}>
    <h3>{arr.name}({arr.age})</h3>
    <h3>{arr.city}</h3>
    <h3>{arr.email}</h3>
    ----------------------
  </div> 
        )
      })}
    </div>
  )
}
  
export default App;
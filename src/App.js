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
import words from './20220922/3/dummyData'
import Button from './20220915/Button'

class App extends Component {
  state = {
    //count: ['','','','','','']
    count: Array.from({ length: 6 }) // 빈 배열 만들 때 쓸 수 있음
  }
   increaseCount = () => {
    let arr = this.state.count
    for(let i = 0; i<arr.length; i++){
      arr[i] = this.pickRandomNumber(1,45).toString() + " "
      for(let j = 0; j<i; j++){ // indexOf, findindex --> 내장 함수로 대체 가능
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
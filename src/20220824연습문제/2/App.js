import React, { Component } from 'react';
import Todo from './20220818/Todo';
// import Animal from './20220818연습문제/Animal'
import './App.css';
import Practice1 from './20220818연습문제/Practice1';
import YoutubeVideo from './20220824/YoutubeVideo';
import dummyData from './20220824/dummyData';

// import Person from './20220818연습문제/Person';
// import Book from './20220818연습문제/Book';
// import NameTag from './20220824/NameTag';

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
    title: "변경전 제목"
  }
  changeTitle = () => {   
    // this.state.title = "제목 업데이트"
    this.setState({title: "제목 업데이트"})
  }
  render(){
    const {title} = this.state    
    return (
      <div className="App">
        <h1>제목: {title}</h1>
        <button type="button" onClick={this.changeTitle}>change title</button>
      </div>
    )
  }
}

export default App;
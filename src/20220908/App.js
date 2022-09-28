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
    count: 0
  }
  showUI = (cnt) => {
    let ui = null;
    switch(cnt){
      case 0:
        ui = <h1>Home</h1>
        break;
      case 1:
        ui = <h1>About</h1>
        break;
      case 2:
        ui = <h1>Detail</h1>
        break;
      default:
        ui = <h1>NotFound</h1>
    }
    return ui
  }
  increase = () => {
    this.setState({count: this.state.count + 1})  // 데이터 변경
  }
  render(){ // 초기 렌더링, 리렌더링(화면 업데이트)
    const { count } = this.state // 비구조화 할당
    return (
      <div className="App">
      {this.showUI(count)}
      <button type="button" onClick={this.increase}>페이지 변경</button>
      </div>
    )
  }
  
}

export default App;

// class App extends Component {
//     state = {
//       movies: [
//         {id: "123450", title: 'Harry Potter', language: "korean", release: '2003-02-22', length:"12345", author: "sunrise", production: "sunrise",divide : "----------------------" }, 
//         {id: "123451", title: 'Indiana Jhones', language: "english", release: '2009-01-09', length:"12345", author: "sunrise", production: "sunrise",divide : "----------------------" }, 
//         {id: "123452", title: 'Terminator', language: "japanese", release: '2007-04-11', length:"12345", author: "sunrise", production: "sunrise",divide : "----------------------" },
//         {id: "123453", title: 'Dracula', language: "chinese", release: '2007-04-13', length:"12345", author: "sunrise", production: "sunrise",divide : "----------------------" },
//         {id: "123454", title: 'Jurassic Park', language: "germany", release: '2007-05-13', length:"12345", author: "sunrise", production: "sunrise",divide : "----------------------" },
//         {id: "123455", title: 'Iron man', language: "italian", release: '2012-12-18', length:"12345", author: "sunrise", production: "sunrise",divide : "----------------------" },
//         {id: "123456", title: 'Spider man', language: "russian", release: '2017-03-07', length:"12345", author: "sunrise", production: "sunrise"}
//     ]
//     }
//     render(){
//       const { movies } = this.state
//       return (
//         <div className='App'>
//         <MovieList movies={movies}></MovieList>
//         </div>
//       )
//     }
    
//   }
  
//   export default App;
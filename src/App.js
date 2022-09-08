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

import words from './kor_dic_coll.json';

const App = () => {
  const containerStyle = {
    width: '60%',
    columns: '2',
    margin: '50px auto'
  }
  const itemStyle = {
    width: '100%',
    /* height: 300px; */ 
    marginBottom: '10px',
    background: 'tan',
    display: 'inline-block' /* 컬럼 짤림 방지*/
  }
  return (
    <div id="container" style={containerStyle}>
      <h1>사전 검색 서비스</h1>
      {/* 데이터 => HTML 템플릿 */}
      {/* map: 데이터 순회 filter: 삭제, 검색 reduce */}
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
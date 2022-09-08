// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import words from './kor_dic_coll.json'

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
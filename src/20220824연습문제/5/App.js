import React, { Component } from 'react';
import Todo from './20220818/Todo';
import './App.css';
import Practice1 from './20220818연습문제/Practice1';
import YoutubeVideo from './20220824/YoutubeVideo';
import dummyData from './20220824/dummyData';
import Cart from './20220824연습문제/3/Cart';
import PhotoGallery from './20220824연습문제/4/PhotoGallery';
import Child from './20220825/Child';

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>필터링된 댓글</h1>
        <h2>==============</h2>
       <CommentFilter comment="너는 진짜 못말리는 바보 똥개다"/>
       <CommentFilter comment="임마! 너 그렇게 살지마! 그지 새끼야 !"/>
       <CommentFilter comment="야 씨~ 너 죽을래? 진짜 ! 콱! 마! "/>
      </div>
    )
  }
}

export default App;
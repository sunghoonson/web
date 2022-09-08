import React, { Component } from 'react';

class Practice1 extends Component {
  render(){ // HTML 템플릿(UI)과 데이터를 이용해서 화면에 페이지를 그려주는 메소드
    // 데이터
    const friends = [
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
  ]   
    function test1(friends) {
      let arr = []
      for (let i = 0; i < friends.length; i++) {
        const friendUI = (
          <>
            <h3 key={i}>{friends[i].name}</h3>   
            <h4 key={i+friends.length}>{friends[i].age}<br/><br/>
                {friends[i].city}</h4>   
          </>
        )
        // console.log(friendUI)        
        arr.push(friendUI)
        // if(i%3!=2){
         if(i!=friends.length-1){
           arr.push("------------------------")
         }        
      }    
      return arr
  }      
    return (          
    	<>
          {test1(friends)}
        </>
    )     
  }
}
export default Practice1;
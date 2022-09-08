import React, {Component} from 'react'// 컴포넌트 생성을 위한 객체와 메서드 임포트

class Book extends React.Component {
  state = {
      title: '해리포터',
      author: '조앤K롤링',
      summary: '해리포터가 마법사로 성장해나가는 과정을 그린 이야기',
      genre: '판타지 소설',
      release: '2003년 9월 4일',
      ISBN: '1234567890'
}
  render() {    
    return (
      // console.log(this),      
    	<>
          <h1>도서 정보</h1>
            <h3>제목 - {this.state.title}</h3>
            <h3>저자 - {this.state.author}</h3>
            <h3>줄거리 - {this.state.summary}</h3>
            <h3>장르 - {this.state.genre}</h3>
            <h3>출판일 - {this.state.release}</h3>
            <h3>ISBN - {this.state.ISBN}</h3>
        </>
    )
  }
}

export default Book;
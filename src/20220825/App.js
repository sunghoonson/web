import React from 'react'
import logo from './logo.svg';
import './App.css';

// key 값을 설정해주는 이유 :
// 리액트에서 리스트에서 특정 아이템이 변경이 된 경우
// key 값이 존재하지 않으면 위에서부터 순차적으로 변경된 아이템을 찾는다
// key 값이 있으면 변경된 아이템이 먼지 곧바로 알 수 있음
// 리액트를 다루는 기술 : 김민준

// class App extends Component {
//     state = {
//       fruits: [
//         {name: "딸기", price: "9000원"},
//         {name: "수박", price: "17000원"},
//         {name: "바나나", price: "4700원"}
//       ]
//     }
//     render(){
//       const { fruits } = this.state
//       return (
//         <>
//           <h1>과일 가격표</h1>
//           {fruits.map((fruit, id) => {
//             return (
//               <div key={id}>
//                 <h3>{fruit.name}</h3>
//                 <h4>{fruit.price}</h4>
//                 <h4>----------------</h4>
//               </div>
//             )
//           })}
//         </>
//       )
//     }
    
//   }
  
//   export default App;

// JSX 문법에서 변수나 상수에 리액트 엘리먼트를 저장해서 사용가능
// 이유 : JSX 문법이 컴파일 되면 자바스크립트 객체이기 때문에
// 객체는 변수에 저장해서 사용가능

const child = () => {
    return<h1>컴포넌트</h1>
}

function App() {
    return (
      <>
        <h1>hello</h1>
        <p>nice to meet you !</p>
        <child/>
      </>
    )
  }
  
  export default App;
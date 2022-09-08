import React, {Component} from 'react'// 컴포넌트 생성을 위한 객체와 메서드 임포트

class Person extends React.Component {
  state = {
      name: "sunrise",
      age: 23,
      friends: [
          "victoria",
          "daniel",
          "hanna"
      ]  
}
displayInfo(){  
  const a = new Person  
  // console.log(a.state)  
  let b = ""
  for (let i = 0; i < a.state.friends.length; i++) {
    b +=a.state.friends[i]+" "    
  }
  // console.log(b)
  alert("\"신상 정보\"\n"+
        "-------------------------"+
        "\n이름 : "+a.state.name+
        "\n나이 : "+a.state.age+
        "\n친구 : "+b) 
}
  render() {    
    return (
      // console.log(this),      
    	<>
            <button onClick={this.displayInfo}>신상정보 확인하기</button>
        </>
    )
  }
}

export default Person;
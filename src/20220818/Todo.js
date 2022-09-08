import React, { Component } from 'react';

class Todo extends Component {
  constructor(props){ // {name: "", age: 3}
    super(props)      // props 상속
    this.state = {      // state 선언
    	name: "cleaning",
        done: false,
        description: "cleaning my room on weekends"
    }
  }
  
  // 이벤트 핸들러 함수
  changeTodoName = () => { 
  	this.setState({name: "learning react"})
  }
  
  // HTML 템플릿
  render() {
    const { name, done, description } = this.state
    const { user } = this.props
    return (
        <>
        	<h2>user: {user}</h2>
            	<h3>name: {name}</h3>
                <h4>done: {done? "finished": "ongoing"}</h4>
                <p>description: {description}</p>
                <button type="button" 
                       onClick={this.changeTodoName}
                >change todo name</button>
        </>
    )
  }
}

export default Todo;

const fruits = ["apple", "banana", "orange"]

class App extends Component{
  state = {
    fruit: fruits[0]
  }
  changeFruitOrNot = () => {
    this.setState({ fruit: fruits[Math.floor(Math.random()*fruits.length)]})
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.fruit !== prevState.fruit){
      console.log('과일 변경됨 !')
      console.log('직전에 선택된 과일: ', prevState.fruit)
    }else{
      alert("현재 선택된 과일은 이전과 동일함")

      // 선택된 과일이 이전과 동일하면 한번더 과일을 선택하기
      this.changeFruitOrNot()
    }
  }

  render(){
    const { fruit } = this.state

    return (
      <div className='App'>
        <div>{fruit}</div>
        <button onClick={this.changeFruitOrNot}>과일 변경하기</button>
      </div>
    )
  }
}

export default App;
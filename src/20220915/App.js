import './App.css';
import Button from './Button';

class App extends Component {
  state = {
    open: false,
    text : "",
    // style : {
    //   color: 'blue'
    // }
  }
 
  openModal = () => {
    this.setState({ open: true })
  }
  closeModal = () => {
    this.clearInputs()
    this.setState({ open: false })
  }
  // 두번째 인풋창에서 엔터키 클릭시 모달창 닫기
  handleKeyUp = (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
      this.closeModal()
    }
  }
  addtext = () =>{
    const inputname = document.querySelector('input[name=name]').value
    const inputdescription = document.querySelector('input[name=description]').value     
    //console.log(inputname)
    //console.log(inputdescription)
    let text = (
      <>
        <h3>{inputname}</h3>
        <h3>{inputdescription}</h3>
      </>
    )
    //console.log(text)
    this.setState({text})    
    
  }
  // 인풋창 초기화
  clearInputs = () => {
    const inputs = document.querySelectorAll('.Modal-body input')
    for(let input of inputs){
      input.value = ''
    }   
    
    this.setState({text: ''})
  }
  componentDidMount(){
    console.log('화면 렌더링이 끝남')
  }

  componentDidUpdate(){
    if(this.state.open){ // 모달창이 열려있으면 
      const firstInput = document.querySelectorAll('.Modal-body input')[0] // 첫번째 인풋창
      firstInput.focus() // 첫번째 인풋창 포커스
    }
  }
  render(){
    const { open,text } = this.state
    const { openModal, closeModal, handleKeyUp, addtext} = this
    return (
      <div className="App">
        <Button handleClick={openModal}>Add Todo</Button>
        <Modal open={open}>
          <div className="Modal-header">You want to add new todo ?</div>
          <div className="Modal-body">
            <label>todo name: <input type="text" name='name'></input></label><br/>
            <label>todo description: <input type="text" name='description' onKeyUp={handleKeyUp}></input></label>
          </div>
          <div className="Modal-footer">
            <Button size="small" handleClick={addtext}>Add</Button>
            <Button size="small" handleClick={closeModal}>Close</Button>
          </div> 
          <div className='blueColor'>
          {text}
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
import './App.css';
import Button from './Button';

import Nav from './20220915/1/Nav';
import Modal from './20220915/2/Modal';
import Button from './20220915/2/Button';

class App extends Component {
  state = {
    open: false,
    text : ''
    // style : {
    //   color: 'blue',
    //   flexDirection : 'column'
    //  }
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
  removetext = () =>{
    this.closeModal()
   //const inputname = document.querySelector('.removeText')
   //inputname.value = 'removed successfully!'
   //const inputdescription = document.querySelector('input[name=description]').value     
    //console.log(inputname)
    //console.log(inputdescription)
    let text = (
      <div>
       <h1>removed successfully!</h1>
      </div>
    )
    console.log(text)
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
  //   if(this.state.open){ // 모달창이 열려있으면 
  //     const firstInput = document.querySelectorAll('.Modal-body input')[0] // 첫번째 인풋창
  //     firstInput.focus() // 첫번째 인풋창 포커스
  //   }
   }
  render(){
    const { open,text } = this.state
    const { openModal, closeModal, handleKeyUp, removetext} = this
    return (
      <div className="App">
        <Button handleClick={openModal}>Remove Todo</Button>                
        <Modal open={open}>
          <div className="Modal-header">You want to remove this todo ?</div>
          <div className="Modal-body">
            내용을 삭제 하시겠습니까?
          </div>
          <div className="Modal-footer">
            <Button size="small" handleClick={removetext}>Remove</Button>
            <Button size="small" handleClick={closeModal}>Close</Button>
          </div> 
          <div className='blueColor'>         
          </div>
        </Modal>
        {text} 
      </div>
    );
  }
}

export default App;
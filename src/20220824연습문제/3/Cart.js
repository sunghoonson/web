import React, { Component } from 'react'

class Cart extends Component{
    state = {           
        cart: []
    }
    //구현하기
    addProduct = () => {
        const product = prompt("원하시는 상품을 추가해주세요 !")        
        const arr = this.state.cart               
        this.setState({cart : [...arr, product.replace("\n","")]})    
        console.log(arr)   
    }
    // 구현하기
    render(){
        const { cart } = this.state 
        return (
            <div className="App">              
              <button type="button" onClick={this.addProduct}>상품 추가하기</button>
              <h1>상품 목록 </h1>
              <h2>---------------</h2>
               {cart.map((product, index) => {
                    return <h3 key={index}>{product}</h3>
               })}               
            </div>
          )
    }
}
export default Cart
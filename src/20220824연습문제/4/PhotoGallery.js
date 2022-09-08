import React, { Component } from 'react'

class PhotoGallery extends Component{
    state = {
        photos: []
    }

    //구현하기
    addPhoto = () => {
        const photo = prompt("추가하려는 사진의 경로를 입력해주세요 !")               
        const arr = this.state.photos               
        this.setState({photos : [...arr, photo]}) 
    }
    // 구현하기
    render(){
        const { photos } = this.state 
        const css = `img {
            height : 300px;
        }`       
        return (
        <div className="App">    
        <style>{css}</style>          
          <button type="button" onClick={this.addPhoto}>사진 추가하기</button>
          <h1>포토 갤러리 </h1>
          <h2>---------------</h2>
          {photos.map((photo, index) => {
                    return <div key={index} >
                                <img src = {photo}/>
                            </div>
               })}               
        </div>
      )
        
    }
}
export default PhotoGallery
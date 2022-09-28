
import Button from './Button.js'
import './Nav.css'

function Nav(){
    const navigate = (url) => {
        window.location.href = url
    }
    return (        
        <div className="nav-container">            
            <Button size = 'small' type="button" handleClick={() => navigate("https://www.google.com/")}>구글</Button>           
            <Button size = 'small' type="button" handleClick={navigate.bind(this, 'https://www.naver.com/')}>네이버</Button>           
            <Button size = 'small' type="button" handleClick={navigate.bind(this, 'https://sssssqew.github.io/dictionary/')}>사전 검색 서비스</Button>           
            {/* <input type="button"  value='네이버' onClick={navigate.bind(this, 'https://www.naver.com/')}></input>           
            <input type="button"  value='사전 검색 서비스' onClick={navigate.bind(this, 'https://sssssqew.github.io/dictionary/')}></input>                        */}
        </div>
    )
}

export default Nav
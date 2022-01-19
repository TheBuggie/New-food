import React,{ useState } from 'react'
import LoginForm from '../Popups/LoginForm';
import Navbar from './Navbar'
import '../Popups/CommonStyle.css'

export default function Show() {
    const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
    return (
        <div className="App" style={{textAlign : "center"}}>
            <Navbar handleLoginClick={handleLoginClick}/>
            <LoginForm isShowLogin={isShowLogin}/>
        </div>
    )
}

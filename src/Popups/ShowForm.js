import './CommonStyle.css'
import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Navbar from "./Navbar";

export default function ShowForm() {
    const [isShowLogin, setIsShowLogin] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
    return (
        <div className="App">
      <Navbar handleLoginClick={handleLoginClick} />
      <LoginForm isShowLogin={isShowLogin} />
    </div>
    )
}

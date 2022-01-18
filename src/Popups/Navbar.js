import React from 'react'

export default function Navbar({ handleLoginClick }) {
    const handleClick = () => {
        handleLoginClick();
      };
    return (
        <div className="navbar">
      <div>
        <span onClick={handleClick} className="loginicon">
          Sign In
        </span>
      </div>
    </div>
    )
}

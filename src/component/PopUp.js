import React from 'react'
import '../css/PopUp.css'

export default function PopUp(props) {
    return (
            <div className="popup-box">
            <div className="box">
               <span className="close-icon" onClick={props.handleClose}>x</span>
               {props.content}
      </div>
      </div>
    )
}

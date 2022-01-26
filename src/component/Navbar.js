import React,{useState} from 'react'
import LoginForm from '../Popups/LoginForm';
import Modal from 'react-modal'
import '../css/Navbar.css'
import SignUpForm from './SignUpForm';

export default function Navbar() {
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [logOutModalIsOpen,setlogOutModalIsOpen] = useState(false);
    return (
      <nav class="navbar navbarStyle">
      <div class="container">
            <button class="btn btn-light btn-sm" onClick={()=>setModalIsOpen(true)}>About</button>
            <button class="btn btn-light btn-sm " onClick={()=>setlogOutModalIsOpen(true)}>Restaurant</button>
            <button class="btn btn-light btn-sm" onClick={()=>setModalIsOpen(true)}>Login</button>
            <button class="btn btn-warning btn-sm " onClick={()=>setlogOutModalIsOpen(true)}>Sign Up</button>
      </div>
      <Modal class="modalStyle" isOpen={modalIsOpen} shouldCloseOnEsc={true} onRequestClose={()=>setModalIsOpen(false)} >
                <LoginForm/>
          <div>
          <button onClick={()=>setModalIsOpen(false)}>CLose Modal
          </button>
          </div>
      </Modal>
      <Modal class="modalStyle" isOpen={logOutModalIsOpen} shouldCloseOnEsc={true} onRequestClose={()=>setlogOutModalIsOpen(false)}>
      </Modal>
    </nav>
    )
}

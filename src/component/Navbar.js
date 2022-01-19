import React,{useState} from 'react'
import LoginForm from '../Popups/LoginForm';
import Modal from 'react-modal'
import '../css/Navbar.css'

export default function Navbar() {
  const [modalIsOpen,setModalIsOpen] = useState(false);
    return (
      <nav class="navbar navbarStyle">
      <a class="navbar-brand" href="#">
        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
      </a>
      <div>
          <button class="btn btn-info btn-sm 
            float-right mx-2" onClick={()=>setModalIsOpen(true)}>Login</button>
            <button class="btn btn-success btn-sm 
            float-right">Sign Up</button>
      </div>
      <Modal class="modalStyle" isOpen={modalIsOpen} shouldCloseOnEsc={true} onRequestClose={()=>setModalIsOpen(false)} >
                <LoginForm/>
      <div>
      <button onClick={()=>setModalIsOpen(false)}>CLose Modal
      </button>
      </div>
      </Modal>
    </nav>
    )
}

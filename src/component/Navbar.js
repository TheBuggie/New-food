import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-text">
            
          </span>
        <div class="d-flex align-items-center">
        <button type="button" class="btn btn-warning px-3 me-2">
          Login
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up 
        </button>
        </div>
        </div>
      </nav>
    )
}

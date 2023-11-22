import React from 'react'
import "./LoginAnimation.css"

export default function LoginAnimation() {
  return (
    <div className='hero'>
      <div className="login">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <form className='form'>
          <div class="form-example">
            <h4>Email: </h4>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="form-example">
            <h4>Password: </h4>
            <input type="password" name="password" id="email" required />
          </div>
          <div class="form-example2">
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
  )
}

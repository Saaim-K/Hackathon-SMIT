import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("errorMessage", errorCode);
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
      });

  }

  return (
    // <>
    //   <form onSubmit={login}>
    //     Log in email<input type="email" placeholder='Type Email...' onChange={(e) => { setEmail(e.target.value) }} /> <br />
    //     Log in pass<input type="password" placeholder='Type Password...' onChange={(e) => { setPassword(e.target.value) }} /> <br />
    //     <button type='submit'>Login</button>
    //   </form>
    // </>
    <>
      <form className="form" autoComplete="off" onSubmit={login}>

        {/* ------------------------- Header ------------------------- */}
        <div className="control">
          <h1>
            Sign In
          </h1>
        </div>
        {/* ------------------------- Header ------------------------- */}

        {/* ------------------------- Username ------------------------- */}
        <div className="control block-cube block-input">
          <input name="username" type="text" placeholder="Username" onChange={(e) => { setEmail(e.target.value) }} />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        {/* ------------------------- Username ------------------------- */}

        {/* ------------------------- Password ------------------------- */}
        <div className="control block-cube block-input">
          <input name="password" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
        </div>
        {/* ------------------------- Password ------------------------- */}

        {/* ------------------------- Button ------------------------- */}
        <button className="btn block-cube block-cube-hover" type="submit" >
          <div className="bg-top">
            <div className="bg-inner"></div>
          </div>
          <div className="bg-right">
            <div className="bg-inner"></div>
          </div>
          <div className="bg">
            <div className="bg-inner"></div>
          </div>
          <div className="text">
            Log In
          </div>
        </button>
        {/* ------------------------- Button ------------------------- */}

      </form>
    </>
  )
}

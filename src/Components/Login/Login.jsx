import React, { useState } from 'react'
import  styles from'./Login.css'
import Home from '../Home/Home';
import { auth } from '../../firebase-config'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [islogin, setIsLogin] = useState(false)

  const login = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setIsLogin(!islogin)
        console.log(islogin);
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
      <form className="styles.form" autoComplete="off" onSubmit={login}>

        {/* ------------------------- Header ------------------------- */}
        <div className="styles.control">
          <h1>
            Sign In
          </h1>
        </div>
        {/* ------------------------- Header ------------------------- */}

        {/* ------------------------- Username ------------------------- */}
        <div className="styles.control styles.block-cube styles.block-input">
          <input name="username" type="text" placeholder="Username" onChange={(e) => { setEmail(e.target.value) }} />
          <div className="styles.bg-top">
            <div className="styles.bg-inner"></div>
          </div>
          <div className="styles.bg-right">
            <div className="styles.bg-inner"></div>
          </div>
          <div className="styles.bg">
            <div className="styles.bg-inner"></div>
          </div>
        </div>
        {/* ------------------------- Username ------------------------- */}

        {/* ------------------------- Password ------------------------- */}
        <div className="styles.control styles.block-cube styles.block-input">
          <input name="password" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
          <div className="styles.bg-top">
            <div className="styles.bg-inner"></div>
          </div>
          <div className="styles.bg-right">
            <div className="styles.bg-inner"></div>
          </div>
          <div className="styles.bg">
            <div className="styles.bg-inner"></div>
          </div>
        </div>
        {/* ------------------------- Password ------------------------- */}

        {/* ------------------------- Button ------------------------- */}
        <button className="styles.btn styles.block-cube styles.block-cube-hover" type="submit" >
          <div className="styles.bg-top">
            <div className="styles.bg-inner"></div>
          </div>
          <div className="styles.bg-right">
            <div className="styles.bg-inner"></div>
          </div>
          <div className="styles.bg">
            <div className="styles.bg-inner"></div>
          </div>
          <div className="styles.text">
            Log In
          </div>
        </button>
        {/* ------------------------- Button ------------------------- */}

      </form>
    </>
  )
}

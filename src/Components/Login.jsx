import React from 'react'
import { useState } from 'react'
import { db } from '../firebase-config'
import './Login.css'

function Login() {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');

    const login = (e) => {
        e.preventDefault();




    }



    return (
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
                    <input name="username" type="text" placeholder="Username" onChange={(e) => { setUserName(e.target.value) }} />
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
                    <input name="password" type="password" placeholder="Password" onChange={(e) => { setUserPass(e.target.value) }} />
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

export default Login
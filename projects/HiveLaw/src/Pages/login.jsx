import React from "react"
import { useState, useEffect } from 'react'
import Pages from "../utilities/Pages"
import { Link } from "react-router-dom";
function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="flex items-center justify-center bg-white-500 box-content w-[718px] h-[538px] rounded-[25px] ">
            <div className="flex flex-col items-center justify-center w-[300px] h-[300px]">
                <h1 className="text-4xl font-bold text-blue-500">Login</h1>
                <input 
                    type="text" 
                    placeholder="Email" 
                    className="w-[342px] h-[48px] border-2 border-blue-500 rounded-[10px] mt-[20px] px-6"/>
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-[342px] h-[48px] border-2 border-blue-500 rounded-[10px] mt-[20px] px-6"/>
                <button className="w-[342px] h-[48px] bg-blue-500 text-white rounded-[10px] mt-[20px]">Login</button>
                <p className="mt-[20px]">Don't have an account? <Link to={Pages.SIGNUP} className="text-skyblue-500 underline">Sign up</Link></p>
            </div>
        </div>
        
    </div>
  )
}

export default Login
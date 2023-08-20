"use client";
// FrontEnd part
// Login Page
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import { axios } from "axios";


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        username: "",
        password: "",
     
    })

    const onLogin = async () => {}

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className=""> Login Page </h1>
            <hr/>
                
            <label htmlFor="username"> USERNAME: </label>
            <input className="p-2 border border-gray-300rounded-lg mb-6 focus:outline-none focus:border-gray-600" id="username" type="text" onChange={(e) => setUser({...user, username: e.target.value})}/>
            <label htmlFor="password"> PASSWORD: </label>
            <input className="p-2 border border-gray-300rounded-lg mb-6 focus:outline-none focus:border-gray-600" id="password" type="password" onChange={(e) => setUser({...user, password: e.target.value})}/>
            <button 
                onClick={onLogin} 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"> 
                Login
            </button>

            <div className="p-4 border">
                <Link href="/signup">Visit SignUp</Link>
            </div>
        
        </div>
    );
}
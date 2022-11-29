import React from 'react'
import { Link } from "react-router-dom";

import "./navbar.css"
import Logo from "../../assert/logo.png"

import { FiLogIn } from "react-icons/fi";

function navbar() {
  return (
    <div className='Nav'>
        <div className='nav-Logo'>
            <Link to='/' className='logo'>
                <img className='logo' src={Logo} alt="logo"/>
            </Link>
        </div>


        <div className='nav-login'>
            <Link to='login'>
                <FiLogIn size='24'/>
            </Link>
        </div>
    </div>
  )
}

export default navbar

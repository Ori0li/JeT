import React from 'react'
import { Link } from "react-router-dom";

import '../page/css/regist.css'
import Logo from "../assert/logo.png"

const regist = () => {
  return (
    <div>
        <div className='regist-container'>
            <div className='regist-logo'>
              <Link to='/'>
                <img className='r-logo' src={Logo} alt="logo"/>
              </Link>
            </div>

            <div className='regist-wrapper'>
              <form id="registForm">
                <h2>회원가입</h2>
                <div className='input-group'>
                  <label>이름</label>
                  <input type="text" placeholder='이름'></input>
                </div>  
                <div className='input-group'>
                  <label>아이디</label>
                  <input placeholder='아이디'></input>
                </div>
                <div className='input-group'>
                  <label>이메일</label>
                  <input type="email" placeholder='이메일'></input>
                </div>
                <div className='input-group'>
                  <label>비밀번호</label>
                  <input type="password" placeholder='패스워드'></input>
                </div>
                <div className='input-group'>
                  <label>비밀번호 확인</label>
                  <input type="password" placeholder='패스워드 확인'></input>
                </div>
                <div className='regist-btn'>
                  <button>회원가입</button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default regist

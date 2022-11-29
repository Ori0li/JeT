import React from 'react'
import { Link } from "react-router-dom";

import './css/login.css'
import Logo from "../assert/logo.png"
import kakao from "../assert/kakao.png"
import naver from "../assert/naver.png"



function login() {
  return (
    <div>
        <div className='login-container'>
            <div className='login-logo'>
              <Link to='/'>
                <img className='l-logo' src={Logo} alt="logo"/>
              </Link>
            </div>

            <div className='login-wrapper'>
              <form id="loginForm">
                <div className='input-group'>
                  <label>아이디</label>
                  <input placeholder='아이디'></input>
                </div>
                <div className='input-group'>
                  <label>비밀번호</label>
                  <input type="password" placeholder='패스워드'></input>
                </div>
                <div className='else-group'>
                  <div>
                      <a href="#none">비밀번호 찾기</a>
                      <a href="/regist">회원가입</a>
                  </div>
                </div>
                <div className='login-btn'>
                  <button>로그인</button>
                </div>
                <hr/>
                <div className='social-btn'> 
                  <button className='ka-btn'>
                  <img className='ka-logo' src={kakao} alt="k-logo"/>
                  KAKAO
                  </button>
                  <button className='na-btn'>
                  <img className='na-logo' src={naver} alt="n-logo"/>
                  NAVER
                  </button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default login

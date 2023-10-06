import React, { useState } from 'react'

export default function LoginPage() {

  const [email, setEmail] = useState(' ')
  const [pw, setPw] = useState(' ')
const inputEmail = (e)=>{
setEmail(e.target.value)
}
const inputPw = (e)=>{
setPw(e.target.value)
}
const submitLogin=(e)=>{
e.preventDefault()
}

  return (
    <>
    <h1>로그인</h1>
    <section>
        <h2>이메일, 비밀번호 입력하는 곳</h2>
        <form onSubmit={submitLogin}>
            <input type='text' placeholder='이메일입력'  onChange={inputEmail} value={email}/>
            <input type='text' placeholder='비밀번호입력' onChange={inputPw} value={pw}/>
            <button>로그인</button>
        </form>
    </section>
    
    </>
  )
}

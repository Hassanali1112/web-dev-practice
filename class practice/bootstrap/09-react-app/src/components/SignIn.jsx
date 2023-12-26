import React from 'react'

const SignIn = () => {

  function SignIn(){

    const userFound = users.find((items)=>{ return items.userEmail === inputEmail && items.userPwd === inputPwd });

    if(userFound){
      setLoginUser(userFound.userName);
    }
    else{
      alert("Invalid Email of password");
    }
  } 

  return (
    <div className="SignIn rounded mt-5 p-5 border border-2 border-primary">
        <h1 className="text-center">SignIn</h1>
        <center>
          <input
            value={inputEmail}
            className="m-3 d-block"
            type="email"
            placeholder="Email"
            onChange={(e) => {setInputEmail(e.target.value)}}
          />

          <input
            value={inputPwd}
            className="m-3 d-block"
            type="password"
            placeholder="Password"
            onChange={(e) => {setInputPwd(e.target.value)}}
          />
          <p>Mr.{loginUser} Login Successfull</p>
          <button className="btn btn-primary d-block" onClick={login}>Sign in</button>
        </center>
      </div>
  )
}

export default SignIn

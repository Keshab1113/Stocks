import React from 'react'

const Login = () => {
  return (
    <div className=' bg-slate-400'>
    HIII
      <div>
        <div>
            <h2>Login</h2>
            <form action="#">
                <div>
                    <input type="text" required/>
                    <label htmlFor="">Username</label>
                </div>
                <div>
                    <input type="password" required/>
                    <label htmlFor="">Password</label>
                </div>
                <button type='submit'>Login</button>
                <div>
                    <p>Don't have an account? Signup</p>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login

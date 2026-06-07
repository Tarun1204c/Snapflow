import React, {useState} from 'react'
import '../styles/form.scss'
import {Link} from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/use.auth'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const {handleLogin} = useAuth()


  function handleSubmit(e){
    e.preventDefault()

    handleLogin(username, password)
    .then(res=>{
      console.log(res)
    })
  }
  return (
    <main>
        <div className="form-container">
            <h1>SnapFlow</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input 
                onInput={(e) =>{setUsername(e.target.value)} }
                type="text" 
                name='username'
                 placeholder='Enter username' />
                <input 
                onInput={(e) => {setPassword(e.target.value)}}
                type="text" 
                name='password' 
                placeholder='Enter a Paasword' />

                <button type='submit'>Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    </main>
  )
}

export default Login




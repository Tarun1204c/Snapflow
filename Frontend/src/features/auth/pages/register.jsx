import React, {useState} from 'react'
import '../styles/form.scss'
import {Link} from 'react-router'
import axios from 'axios'

const Register = () => {

    const [username,setUsername] = useState("")
    const[email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function handleSubmit(e){
        e.preventDefault()
    }
  return (
    <main>
        <div className="form-container">
            <h1>SnapFlow</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input
                onInput={(e)=>{setUsername(e.target.value)}}
                 type="text" 
                 name="username" 
                 placeholder="Enter a username"  />
                <input
                onInput={(e)=>{setEmail(e.target.value)}}
                type="text" 
                name="email" 
                placeholder="Enter a email" />
                <input  
                onInput={(e)=> {setPassword(e.target.value)}}
                type="text" 
                name="Paasword" 
                placeholder="Enter a Paasword" />
                <button type='submit'>Signup</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>

    </main>


  )
    
}

export default Register

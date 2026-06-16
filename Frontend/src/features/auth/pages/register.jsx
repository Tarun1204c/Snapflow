import React, {useState} from 'react'
import '../styles/form.scss'
import {Link, useNavigate} from 'react-router'
import axios from 'axios'
import { useAuth } from '../hooks/use.auth'

const Register = () => {

    const {loading, handleRegister} = useAuth()

    const [username,setUsername] = useState("")
    const [email, setEmail] = useState("")
    const[password, setPassowrd] = useState("")

    const navigate = useNavigate()

    const handleSubmit =  async (e) => {
        e.preventDefault()

       await handleRegister(username, email, password)
       navigate('/')
    }


    if(loading){
        return (<main><h1>Loading...</h1></main>)
    }
    


    return (
    <main>
        <div className="form-container">
            <h1>SnapFlow</h1>
            <form className='form' onSubmit={handleSubmit}>
                <input
                onChange={(e)=>{setUsername(e.target.value)}}
                 type="text" 
                 name="username" 
                 placeholder="Enter a username"  />
                <input
                onChange={(e)=>{setEmail(e.target.value)}}
                type="text" 
                name="email" 
                placeholder="Enter a email" />
                <input  
                onChange={(e)=> {setPassword(e.target.value)}}
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

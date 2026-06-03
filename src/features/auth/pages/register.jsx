import React from 'react'
import '../styles/form.scss'
import {Link} from 'react-router'

const Register = () => {
  return (
    <main>
        <div className="form-container">
            <h1>SnapFlow</h1>
            <form className='form'>
                <input type="text" name="username" placeholder="Enter a username"  />
                <input type="text" name="email" placeholder="Enter a email" />
                <input  type="text" name="Paasword" placeholder="Enter a username" />
                <button type='submit'>Signup</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>

    </main>


  )
    
}

export default Register

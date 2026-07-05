import React from 'react'
import "../nav.scss"
import { useNavigate } from 'react-router'

const Nav = () => {
    const navigate = useNavigate()
  return (
    <nav className='nav-bar'>
        <p>SnapFlow</p>
        <button 
        onClick={() => {navigate("/create-post")}}
        className='button primary-button'>new post</button>
    </nav>
  )
}

export default Nav

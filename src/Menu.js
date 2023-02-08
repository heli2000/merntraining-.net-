import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
        <Outlet/>
      <ul>
        <li><Link to="/">car1</Link></li>
        <li><Link to="/car2">car2</Link></li>
        <li><Link to="/Lifecycle">Lifecycle</Link></li>
        <li><Link to="/usereducer">usereducer</Link></li>
      </ul>
      
    </div>
  )
}

export default Menu

import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container-fluid bg-dark text-white'>
        <div className='navbar'>
            <div className='navbar navbar-expand-md'>
              <a className='navbar-brand'>
                  <img className='lapilogo' src="lapi logo.png" alt=""/>
              </a>
                <div className='navbar-nav'>
                    <NavLink className="nav-item" to="/home"><button className='navbut'>Home</button></NavLink>
                     <NavLink className="nav-item" to="/HP"><button className='navbut'>HP</button></NavLink>
                      <NavLink className="nav-item" to="/Dell"><button className='navbut'> Dell</button></NavLink>
                       <NavLink className="nav-item" to="/Asus"><button className='navbut'>Asus</button></NavLink>
                        <NavLink className="nav-item" to="/Lenovo"><button className='navbut'>Lenovo</button></NavLink>
                         <NavLink className="nav-item" to="/Contact"><button className='navbut'>Contact</button></NavLink>
                   
                </div>

            </div>

        </div>
    </div>
  )
}

export default Navbar
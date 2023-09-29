import React from 'react'
import { navMenu } from './Data/Navmenu'
import './navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <img src="../images/cog-logo.png" alt="Logo" />
                <ul className="menu">
                    {navMenu.map(item => (
                        <li key={item.Id} className={item.cName}>
                            {item.isButton ? (
                            <button>{item.title}</button> 
                            ) : (
                            <a href={item.path}>{item.title}</a>
                            )}
                        </li>
                    ))}
                </ul>


            </nav>


        </>

    )
}

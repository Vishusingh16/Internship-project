import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Component } from "react";
import NavbarStyles from "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
    const[state, setState] = useState(false);
        return(
            <nav className="navbar-items">
                <h1 className="navbar-logo">Trippy</h1>

                <div className="menu-icons" onClick={()=>{
                    setState(!state);
                }}>
                    {state ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </div>

                <ul className={state ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <Link to = {item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
                            </li>
                        )
                    })}
                    <Link to="/signUp"><button>Sign Up</button></Link>
                </ul>
            </nav>
        )
    }


export default Navbar;
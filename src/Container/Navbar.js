import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue">
                    <Link to="/" className=" left" style={{ marginLeft: "15px", textDecoration: "none", color: "inherit", marginTop: "15px" }}><h3>Banking  <AccountBalanceIcon style={{fontSize:"23px"}}/></h3>
                    </Link>
                    <ul className="right">
                        <li><NavLink style={{ textDecoration: "none", color: "inherit" }} exact to="/">Home </NavLink></li>

                        <li><NavLink style={{ textDecoration: "none", color: "inherit" }} exact to="/AddUser">Add User</NavLink></li>

                        <li><NavLink style={{ textDecoration: "none", color: "inherit" }} exact to="/About">About</NavLink></li>
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

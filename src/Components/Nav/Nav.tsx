import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"
import { Link } from "react-router-dom";
import "./nav.css"
const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div>
            <div className="navwidth">
                <nav className="navbar">
                    <div className="menu-icon" onClick={handleClick}>
                        {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
                        <FontAwesomeIcon icon="bars" /> ==
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                        {"{"}
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/projects"
                                className="nav-link"
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </Link>
                        </li>

                        <li className="nav-item" >
                           
                            <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
                                Contact Me
                            </Link>
                            {"}"}
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav

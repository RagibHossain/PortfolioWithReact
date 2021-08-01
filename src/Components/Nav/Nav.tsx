import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react"
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./nav.css"
const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeNav = () => setClick(false);
    const desktopNav = {
        width: "250px"
    }
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const mobileNav = {
        width: click ? "250px" : "0px"
    }
    const pcNavItems = {
        opacity: "1"
    }
    const mobileNavItems = {
        opacity: click ? "1" : "0"
    }
    return (
        <div style={{ backgroundColor: "#151515", position: "fixed", zIndex: 1 }}>
            <div id="mySidenav" style={isTabletOrMobile ? mobileNav : desktopNav} className="sidenav">
                <h1 style={isTabletOrMobile ? mobileNavItems : pcNavItems}>Ragib</h1>
                <ul style={isTabletOrMobile ? mobileNavItems : pcNavItems}>
                    {isTabletOrMobile && <li className="closebtn" onClick={() => closeNav()}>  &times;</li>}
                    <li >About</li>
                    <li >Services</li>
                    <li >Clients</li>
                    <li >Contact</li>
                </ul>
                <span className="copyright" style={isTabletOrMobile ? mobileNavItems : pcNavItems}>
                    &copy; 2021 Ragib Ibne Hossain
                </span>

            </div>
            {isTabletOrMobile && <span className="nav-toggle-button" onClick={() => handleClick()}>&#9776;</span>}
        </div>
    )
}

export default Nav

import '../styles/Navbar.css'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    function handleClick() {
        setClick(!click)
    }
    function closeMobileMenu() {
        setClick(false)
    }

    function showButton() {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)


    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>TRAVELLO<i className="fa-solid fa-plane-departure"></i></Link>
            </div>
            <div className='menu-icon'>
                <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"} onClick={handleClick}></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-link' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-link' onClick={closeMobileMenu}>
                        Products
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-link-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
        </nav>
    )
}

export default Navbar
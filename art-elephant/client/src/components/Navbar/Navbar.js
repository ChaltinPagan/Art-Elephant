import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ submit }) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link to='/' className="navbar-brand">
                <img className="elephant" alt="elephant" src="https://png.icons8.com/material/35/ffffff/elephant.png" />
                Art Elephant
          </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <img alt="menu" src="https://png.icons8.com/material/30/ffffff/menu.png" />
                </span>
            </button>

            <div className="collapse navbar-collapse" id="nav">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to='/registry' className='nav-link'>Registry</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/opportunities' className='nav-link'>Opportunities</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className='nav-link'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/faq' className='nav-link'>FAQ</Link>
                    </li>
                    <li className="nav-item">
                        {submit ? <Link to='/my-account' className='nav-link'>My Account</Link> : 
                        <Link to='/login' className='nav-link'>Login</Link> }
                        
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
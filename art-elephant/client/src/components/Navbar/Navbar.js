import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import x_icon from './icons8-delete-30.png';
import menu_icon from './icons8-menu-30.png';
import elephant_brand from './icons8-elephant-35.png';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            open_menu: false
        }
    }

    toggleMenu = () => {
        const {open_menu} = this.state;
        this.setState({
            open_menu: !open_menu
        })
    }

    render(){
        const {open_menu} = this.state;
        return (
            <nav className="navbar navbar-expand-lg">
                <Link to='/' className="navbar-brand">
                    <img className="elephant" alt="" src={elephant_brand} />
                    Art Elephant
            </Link>

                {/* For mobile devices, use responsive navbar. 
                    If menu is open, toggle icon chnages to 'x'. */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggleMenu} >
                    <span className="navbar-toggler-icon">
                        <img alt="menu" src={open_menu ? x_icon : menu_icon} />
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

                        {/* If user is logged in, Login changes to My Account link. */}
                        <li className="nav-item">
                            {this.props.submit ? <Link to='/my-account' className='nav-link'>My Account</Link> : 
                            <Link to='/login' className='nav-link'>Login</Link> }
                            
                        </li>
                    </ul>
                </div>
            </nav>
        )
        
    }
}

export default Navbar;
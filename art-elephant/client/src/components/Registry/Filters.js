import React from 'react';
import { Link } from 'react-router-dom';
import registryHelpers from './registry-helpers';

const alphabet = registryHelpers.alphabet();

const Filters = () => {
    return (
        <div>
            <ul className='alphaIndex'>
                    {/* Convert ASCII number to English letter. */}
                    {alphabet.map( el => 
                        <li key={el} onClick={this.handleClick}>
                            <Link to="/registry">{String.fromCharCode(el)}</Link>
                        </li>
                    )}
                </ul>

            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Medium
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <p className="dropdown-item">Action</p>
                    <p className="dropdown-item">Another action</p>
                    <p className="dropdown-item">Something else here</p>
                </div>
            </div>

            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Genre
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <p className="dropdown-item">Action</p>
                    <p className="dropdown-item">Another action</p>
                    <p className="dropdown-item">Something else here</p>
                </div>
            </div>

            <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Location
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <p className="dropdown-item">Action</p>
                    <p className="dropdown-item">Another action</p>
                    <p className="dropdown-item">Something else here</p>
                </div>
            </div>

        </div>
    )
}

export default Filters;
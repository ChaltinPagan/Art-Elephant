import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem } from 'react-bootstrap';
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
            
            <DropdownButton
                title="Medium"
                id='split-button-basic-default' >
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3">Something else here</MenuItem>
            </DropdownButton>

            <DropdownButton
                title="Genre"
                id='split-button-basic-default' >
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3">Something else here</MenuItem>
            </DropdownButton>

            <DropdownButton
                title="Location"
                id='split-button-basic-default' >
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3">Something else here</MenuItem>
            </DropdownButton>
        </div>
    )
}

export default Filters;
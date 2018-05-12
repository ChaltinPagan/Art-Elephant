import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

const Filters = () => {
    return (
        <div>
            <h3>Filter</h3>
            
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
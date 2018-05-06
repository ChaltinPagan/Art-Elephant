import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import registryHelpers from './registry-helpers';
import './Registry.css';
import Filters from './Filters';
import Profile from '../Profile/Profile';

class Registry extends Component {
    constructor(){
        super();
        this.state = {
            alphabet: registryHelpers.alphabet(),
            medium: "",
            genre: "",
            location: "",
            selected: ""
        };
    }

    handleClick = (e) => {
        this.setState({
            selected: e.target.innerText
        });
    };

    render(){
        const { alphabet, selected } = this.state;
        console.log("selected", selected)
        return(
            <div className='registry'>
                <h1>Artist Registry</h1>
                <ul className='alphaIndex'>
                    {/* Convert ASCII number to English letter. */}
                    {alphabet.map( el => 
                        <li key={el} onClick={this.handleClick}>
                            {String.fromCharCode(el)}
                        </li>
                    )}
                </ul>

                <Filters />

                <Profile selected={selected} />
            </div>
        )
    }
}

export default Registry;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import registryHelpers from './registry-helpers';
import './Registry.css';
import Filters from './Filters';
import axios from 'axios';
// import Profile from '../Profile/Profile';

class Registry extends Component {
    constructor(){
        super();
        this.state = {
            alphabet: registryHelpers.alphabet(),
            medium: "",
            genre: "",
            location: "",
            selected: "", 
            artists: []
        };
    }

    handleClick = (e) => {
        this.setState({
            selected: e.target.innerText
        });
    };

    getArtists = () => {
        axios.get('/artists')
            .then( res => {
                console.log("artists", res.data.artists);
                this.setState({
                    artists: res.data.artists
                });
            })
            .catch( err => console.log(err) );
    };

    componentDidMount = () => {
        this.getArtists();
    };

    render(){
        const { alphabet, artists } = this.state;
        // console.log("selected", selected)
        return(
            <div className='registry'>
                <h1>Artist Registry</h1>
                <ul className='alphaIndex'>
                    {/* Convert ASCII number to English letter. */}
                    {alphabet.map( el => 
                        <li key={el} onClick={this.handleClick}>
                            <Link to="/registry">{String.fromCharCode(el)}</Link>
                        </li>
                    )}
                </ul>

                <Filters />

                {artists.map( el =>
                <li key={el.id}>{el.name}, {el.medium}</li>)}
            </div>
        )
    }
}

export default Registry;
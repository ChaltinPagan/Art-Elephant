import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './Registry.css';
import Profile from '../Profile/Profile';
import Artists from './Artists';

class Registry extends Component {
    constructor(){
        super();
        this.media = ["Painting", "Drawing", "Sculpture", "Mixed Media", "Performance", "Video", "Printmaking", "Installation", "Photography"] ;
        this.state = {
            artists: [],
            filtered_artists: [],
            message: ""
        };
    }

    getArtists = () => {
        axios.get('/artists')
            .then( res => {
                this.setState({
                    artists: res.data.artists
                })
            })
            .catch( err => console.log(err) );
    };

    componentDidMount = () => {
        this.getArtists();
    };

    handleFilter = (e) => {
        const { artists } = this.state;

        let filter = artists.filter( el => {
            if (el.medium.includes(e.target.innerText)) {
                return el;
            } 
        })

        if (filter.length) {
            this.setState({
                filtered_artists: filter,
                message: ""
            })
        } else {
            this.setState({
                message: "No artists in this medium."
            })
        }

    }

    handleReset = () => {
        this.setState({
            filtered_artists: [],
            message: ""
        })
    }

    renderArtistList = () => {
        const { artists, filtered_artists, message } = this.state;
        return (
            <div>
                <button type="button" className="btn btn-outline-dark btn-filter" onClick={this.handleReset}>All Artists</button>
                <div className="dropdown">
                    <button className="btn btn-outline-dark dropdown-toggle btn-filter" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Filter by Medium
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" onClick={this.handleFilter}>
                        {this.media.map( (el, i) => 
                        <button className="dropdown-item" type="button" key={i}>{el}</button>)}
                    </div>
                </div>
                <Artists artists={artists} selected={filtered_artists} message={message} />
            </div>
        )
    };

    renderProfile = (props) => {
        const { artist_id } = props.match.params;
        return <Profile artist_id={artist_id} />
    }

    render(){
        return(
            <div className='content registry'>
                <h1>Artist Registry</h1>

                <Switch>
                    <Route exact path='/registry' render={this.renderArtistList} />
                    <Route path='/registry/:artist_id' render={this.renderProfile} />
                </Switch>

            </div>
        )
    }
}

export default Registry;
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './Registry.css';
import Filters from './Filters';
import Profile from '../Profile/Profile';
import Artists from './Artists';

class Registry extends Component {
    constructor(){
        super();
        this.state = {
            artists: []
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

    renderArtistList = () => {
        const { artists } = this.state;
        return <Artists artists={artists} />
    };

    renderProfile = (props) => {
        const { artist_id } = props.match.params;
        return <Profile artist_id={artist_id} />
    }

    render(){
        return(
            <div className='registry'>
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
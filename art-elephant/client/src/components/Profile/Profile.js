import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slideshow from './Slideshow';
import Info from './Info';
import './Profile.css';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            profile: null
        };
    }

    getArtistInfo = () => {
        const id = this.props.artist_id;
        axios.get(`/artists/${id}`)
            .then( res => {
                this.setState({
                    profile: res.data.single_artist[0]
                });
            })
    };

    componentDidMount = () => {
        this.getArtistInfo();
    };

    render(){
        const { profile } = this.state;
        console.log("profile:", profile);
        if (profile) {
            return(
                <div className="profile container">
                    <div className="row">
                        <div className="col-sm title">
                            <h2>{`${profile.first_name} ${profile.last_name}`}</h2>
                            <h3>{`Medium: ${profile.medium}`}</h3>
                        </div>
        
                        {/* <div className="col-sm back">
                            <Link className="btn btn-outline-dark" to="/registry" role="button">Back</Link>
                        </div> */}
                    </div>
    
                    <div className="row">
                        <Slideshow images={profile.images}/>
        
                        <Info profile={profile} />
                    </div>

                </div>
            )
        } else {
            return (
                <div>Loading...</div>
            )
        }
            
    }
}

export default Profile;
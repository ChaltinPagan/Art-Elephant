import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Button } from 'react-bootstrap';
import axios from 'axios';
import Slideshow from './Slideshow';
// import Statement from './Statement';
import Map from './Map';
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
        if (profile) {
            return(
                <div className="grid-container">
                    <div className="title">
                        <h2>{`${profile.first_name} ${profile.last_name}`}</h2>
                        <h3>{`Medium: ${profile.medium}`}</h3>
                    </div>
    
                    <div className="back">
                        <Button componentClass="p" id="back_button">
                            <Link to='/registry'>Back</Link>
                        </Button>
                    </div>
    
                    <Slideshow />
    
                    <div className="info">
                        <Tabs defaultActiveKey={1} id="profile-tabs" >
                            <Tab eventKey={1} title="Statement">
                                {/* <Statement /> */}
                                <p>{profile.statement}</p>
                            </Tab>
                            <Tab eventKey={2} title="Studio Location">
                                <p>{profile.address}</p>
                                <Map location={profile.address}/>
                            </Tab>
                            <Tab eventKey={3} title="Contact">
                                <p>Contact here</p>
                            </Tab>
                        </Tabs>
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
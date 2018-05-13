import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Geocode from 'react-geocode';
import Slideshow from './Slideshow';
import Statement from './Statement';
import Map from './Map';
import './Profile.css';
import axios from 'axios';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ src }) => <img alt="studio" src={src}/>;

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            lat: null,
            lng: null, 
            statement: ""
        };

        // Set Google Maps Geocoding API for purposes of quota management. 
        Geocode.setApiKey("AIzaSyB5s7V6Ehzj1w8qsUlWmTxiDp_EZWqw7c4");

        // Enable or disable logs.
        Geocode.enableDebug();

        // Get latidude & longitude from address.
        Geocode.fromAddress("New York, NY").then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log("res:", response);
                this.setState({
                    lat: lat,
                    lng: lng
                });
            },
            error => {
                console.error(error);
            });

        // componentDidMount = () => {
        //     axios.get('http://localhost:8000/artists')
        //         .then( res => {
        //             console.log("statement:", res.data.statement)
        //         })
        //         .catch( err => console.log(err) )
        // }
    }

    render(){
        const { lat, lng } = this.state;
        const center = {lat: lat, lng: lng};
        console.log("profile lat:", lat)
        if (lat) {
            return(
                <div className="grid-container">
                    <div className="title">
                        <h1>Artist Profile</h1>
                    </div>
    
                    <Slideshow />
    
                    <div className="name">
                        <h2>Chaltin Pagan</h2>
                        <h3>Medium: painting</h3>
                    </div>
    
                    <div className="info">
                        <Tabs defaultActiveKey={1} id="profile-tabs" >
                            <Tab eventKey={1} title="Statement">
                                <Statement />
                            </Tab>
                            <Tab eventKey={2} title="Location">
                                <div style={{ height: '50vh', width: '100%' }}>
                                    {/* <GoogleMapReact
                                        bootstrapURLKeys={{ key: "AIzaSyB5s7V6Ehzj1w8qsUlWmTxiDp_EZWqw7c4" }}
                                        center={center}
                                        defaultZoom={12}
                                    >
                                        <AnyReactComponent
                                            lat={lat}
                                            lng={lng}
                                            src={"https://png.icons8.com/color/24/000000/marker.png"}
                                        />
                                    </GoogleMapReact> */}
                                    <Map lat={lat} lng={lng}/>
                                </div>
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
                <div>loading</div>
            )
        }
    }
}

export default Profile;
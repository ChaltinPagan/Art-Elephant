import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { GOOGLE_API_KEY } from '../../app-env';

const MapMarker = ({ src }) => <img alt="studio" src={src}/>;

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            api_key: GOOGLE_API_KEY,
            location: this.props.location,
            lat: null,
            lng: null
        };

    }

    // Use Google Maps Geocoding API to transform an address into coordinates
    // Coordinates will be stored in state and passed to Google Map React component
    // Google Map React used the Google Maps Javascript API
    getCoordinates = () => {
        const { location, api_key } = this.state;
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${api_key}`)
            .then( res => {
                console.log("res:", res);
                const { lat, lng } = res.data.results[0].geometry.location;

                // No address will return zero results.
                // Ambiguous or incomplete adresseses may return zero results or more than one result
                if (res.data.results.length !== 1){
                    this.setState({
                        location: ""
                    })
                }

                this.setState({
                    lat: lat,
                    lng: lng
                });
            })
            .catch( err => console.log(err));
    }

    componentDidMount = () => {
        this.getCoordinates();
    }
    
    render() {
        const { lat, lng, api_key, location } = this.state;
        const center = {lat: lat, lng: lng};

        if (!location) {
            return (
                <div>
                    Contact artist for studio location.
                </div>
            )
        } else {
            return (
                <div>
                    <p>{location}</p>

                    {/* Important! Always set the container height explicitly */}
                    <div style={{ height: '40vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: api_key }}
                            center={center}
                            defaultZoom={15}
                        >
                            <MapMarker
                                lat={lat}
                                lng={lng}
                                src={"https://png.icons8.com/color/24/000000/marker.png"}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            )
        }
    }
}

export default Map;
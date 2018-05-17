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
        getCoordinates = () => {
            const { location, api_key } = this.state;
            console.log("key:", api_key);
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${api_key}`)
                .then( res => {
                    const { lat, lng } = res.data.results[0].geometry.location;
                    console.log("res:", res);
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
        const { lat, lng, api_key } = this.state;
        const center = {lat: lat, lng: lng};
            return (
                // Important! Always set the container height explicitly
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: api_key }}
                        center={center}
                        defaultZoom={13}
                    >
                        <MapMarker
                            lat={lat}
                            lng={lng}
                            src={"https://png.icons8.com/color/24/000000/marker.png"}
                        />
                    </GoogleMapReact>
                </div>
            )
        
    }
}

export default Map;
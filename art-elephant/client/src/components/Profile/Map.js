import React, { Component } from 'react';
import Geocode from 'react-geocode';
import GoogleMapReact from 'google-map-react';
// import axios from 'axios';

const AnyReactComponent = ({ src }) => <img alt="studio" src={src}/>;

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            api_key: "AIzaSyB5s7V6Ehzj1w8qsUlWmTxiDp_EZWqw7c4",
            location: encodeURIComponent(this.props.location),
            lat: null,
            lng: null
        };
    

        // Enable or disable logs.
        Geocode.enableDebug();

        // Get latidude & longitude from address.
            Geocode.fromAddress(`${this.state.location}`).then(
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
        
    }
        // getCoordinates = () => {
        //     const { location, api_key } = this.state;
        //     axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=245%20Broome%20St,%20NY,%20NY=AIzaSyB5s7V6Ehzj1w8qsUlWmTxiDp_EZWqw7c4`)
        //         .then( res => {
        //             const { lat, lng } = res.results[0].geometry.location;
        //             console.log("res:", res.results);
        //             this.setState({
        //                 lat: lat,
        //                 lng: lng
        //             });
        //         })
        //         .catch( err => console.log(err));
        // }

        // componentDidMount = () => {
        //     this.getCoordinates();
        // }
    

    render() {
        const { lat, lng, api_key } = this.state;
        const center = {lat: lat, lng: lng};
        console.log("address:", this.props.location)
        // if(!this.state.address) {
        //     return <div>Loading...</div>
        // } else {
            return (
                // Important! Always set the container height explicitly
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: api_key }}
                        center={center}
                        defaultZoom={13}
                    >
                        <AnyReactComponent
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
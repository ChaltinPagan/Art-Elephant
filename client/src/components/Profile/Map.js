import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            },
            zoom: 11
        }
    }

    //   static defaultProps = {
    //     center: {
    //       lat: 59.95,
    //       lng: 30.33
    //     },
    //     zoom: 11
    //   };

    render() {
        const { center, zoom } = this.state;
        console.log('center:', center.lat)
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyB5s7V6Ehzj1w8qsUlWmTxiDp_EZWqw7c4" }}
                    center={center}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent
                        lat={center.lat}
                        lng={center.lng}
                        text={'Studio'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Map;
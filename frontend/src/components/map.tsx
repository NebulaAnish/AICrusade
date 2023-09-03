import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Coordinates } from '../../types/types';

import { Marker, Cluster } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_ACCESS_TOKEN || '',
});

export interface Marker {
    coordinates: Coordinates;
    img: string;
}

export interface MapProps {
    width: string;
    height: string;
    transformerMarkers: Marker[];
    center: Coordinates;
}
// in render()
const clusterMarker = (coordinates: Coordinates) => 'M';
const MapComponent = ({ width, height, transformerMarkers, center }: MapProps) => {
    return (
        <Map
            zoom={[40]}
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height,
                width,
            }}
        >
            {transformerMarkers.map((marker, key) => {
                console.log(marker.coordinates);
                return (
                    <Marker
                        key={key}
                        coordinates={marker.coordinates}
                        // onClick={this.onMarkerClick.bind(this, feature.geometry.coordinates)}
                    >
                        <img src={marker.img} height="20px" width="20px" alt="" />
                    </Marker>
                );
            })}
        </Map>
    );
};

export default MapComponent;

// import { Popup } from "react-mapbox-gl";

// <Popup
//   coordinates={[-0.13235092163085938,51.518250335096376]}
// onClick: ()=>{}
//   offset={{
//     'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
//   }}>
//   <h1>Popup</h1>
// </Popup>

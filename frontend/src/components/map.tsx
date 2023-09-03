import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Coordinates } from '../../types/types';

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
    center?: Coordinates;
}
// in render()
const clusterMarker = (coordinates: Coordinates) => 'M';
const MapComponent = ({ width, height, transformerMarkers, center }: MapProps) => {
    console.log(transformerMarkers[0]);

    return (
        <Map
            zoom={[10]}
            style="mapbox://styles/mapbox/streets-v9"
            center={center}
            containerStyle={{
                height,
                width,
            }}
        >
            {transformerMarkers.map((marker, i) => {
                return (
                    <Marker
                        key={marker}
                        coordinates={{
                            lat: marker.coordinates[0],
                            lon: marker.coordinates[1],
                        }}
                        anchor="bottom"
                    >
                        <img height={'20px'} width={'20px'} src={marker.img} />
                    </Marker>
                );
            })}
            <ZoomControl position="top-left" />
            {transformerMarkers.map((marker, key) => (
                <Layer type="symbol" id="marker" key={key} layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={marker.coordinates} />
                </Layer>
            ))}
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

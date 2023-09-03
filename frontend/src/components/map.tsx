import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Coordinates } from '../../types/types';

import { Marker } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_ACCESS_TOKEN || '',
});

export interface MapProps {
    width: string;
    height: string;
    transformerMarkerCoordinates: Coordinates[];
    markerUrl: string;
    center: Coordinates;
}
// in render()
const MapComponent = ({ width, height, transformerMarkerCoordinates, markerUrl, center }: MapProps) => {
    return (
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height,
                width,
            }}
            // center={[27.734086, 85.347002] }
        >
            {transformerMarkerCoordinates.map((marker, i) => (
                <Marker key={i} coordinates={marker} anchor="bottom">
                    <img height={'40px'} width={'40px'} src={markerUrl} />
                </Marker>
            ))}

            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[27.714881, 85.312914]} />
            </Layer>
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

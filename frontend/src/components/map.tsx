import ReactMapboxGl, { Marker, ZoomControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Coordinates, Transformer } from '../../types/types';

import TransformerMarker from './ui/TransformerMarker';
import { normalTransformer } from '../../db/images';
import { useState } from 'react';

const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_ACCESS_TOKEN || '',
    interactive: true,
});

export interface Marker {
    coordinates: Coordinates;
    img: string;
}

export interface MapProps {
    containerStyle: React.CSSProperties;
    transformers: Transformer[];
    center: Coordinates;
    handleClick?: (e: any, map: any) => void;
    mapSelected?: boolean;
    selectedLocation?: { latitude: number; longitude: number };
}

const MapComponent = ({
    containerStyle,
    transformers,
    center,
    handleClick = () => {},
    mapSelected,
    selectedLocation,
}: MapProps) => {
    const [mapS, setMapS] = useState(mapSelected);
    return (
        <Map
            onClick={(e, map) => handleClick(e, map)}
            zoom={[10]}
            style="mapbox://styles/mapbox/streets-v9"
            center={center}
            containerStyle={containerStyle}
        >
            {transformers.map((transformer, i) => {
                return <TransformerMarker transformer={transformer} />;
            })}
            {mapS && (
                <Marker
                    coordinates={{
                        lat: selectedLocation?.latitude,
                        lon: selectedLocation?.longitude,
                    }}
                >
                    <img height={'20px'} width={'20px'} src={normalTransformer} alt="Transformer normal" />
                </Marker>
            )}

            <ZoomControl position="top-left" />
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

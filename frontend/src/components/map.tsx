import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Coordinates, Transformer } from '../../types/types';
import { faultyTransformer, normalTransformer } from '../../db/images';
import Modal from './ui/Modal';
import TransformerMarker from './ui/TransformerMarker';

const Map = ReactMapboxGl({
    accessToken: process.env.MAPBOX_ACCESS_TOKEN || '',
});

export interface Marker {
    coordinates: Coordinates;
    img: string;
}

export interface MapProps {
    containerStyle: React.CSSProperties;
    transformers: Transformer[];
    center: Coordinates;
}

const MapComponent = ({ containerStyle, transformers, center }: MapProps) => {
    return (
        <Map zoom={[10]} style="mapbox://styles/mapbox/streets-v9" center={center} containerStyle={containerStyle}>
            {transformers.map((transformer, i) => {
                return <TransformerMarker key={i} transformer={transformer} />;
            })}

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

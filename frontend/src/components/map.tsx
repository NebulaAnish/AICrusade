import ReactMapboxGl, { Layer, Feature, Marker, ZoomControl } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Coordinates, Transformer } from '../../types/types';
import { faultyTransformer, normalTransformer } from '../../db/images';

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
        <Map
            zoom={[10]}
            style="mapbox://styles/mapbox/streets-v9"
            center={center}
            containerStyle={containerStyle}
        >
            <>
                {transformers.map((transformer, i) => {
                    return (
                        <>
                            <Marker
                                key={transformer}
                                coordinates={{
                                    lat: transformer.latitude,
                                    lon: transformer.longitude,
                                }}
                                anchor="bottom"
                            >
                                <img
                                    height={'20px'}
                                    width={'20px'}
                                    src={transformer.fault ? faultyTransformer : normalTransformer}
                                    alt="marker"
                                />
                            </Marker>
                        </>
                    );
                })}
            </>

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

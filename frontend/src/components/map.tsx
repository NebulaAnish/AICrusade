import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
    const Map = ReactMapboxGl({
        accessToken: process.env.MAPBOX_ACCESS_TOKEN || '',
    });
    return (
        <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
                height: '100vh',
                width: '100vw',
            }}
        >
            <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
            </Layer>
        </Map>
    );
};
export default Map;
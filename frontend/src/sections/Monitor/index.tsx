import { Marker } from '@/components/map';
import dynamic from 'next/dynamic';

const buttons = ['Monitor', 'Add new transformer', 'Analytics'];

export default function Home() {
    const MapWithNoSSR = dynamic(() => import('@/components/map'));
    const transformerMarkers: Marker[] = [
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [26, 85] },
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [28, 85] },
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [29.73, 85.34] },
    ];

    return (
        <div id="map" className="overflow-hidden">
            <MapWithNoSSR
                center={[27.714889, 85.312917]}
                transformerMarkers={transformerMarkers}
                height={'70vh'}
                width={'100vw'}
            />
        </div>
    );
}

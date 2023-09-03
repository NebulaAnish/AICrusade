import { Input } from '@/components/ui/input';
import Map, { Marker } from '@/components/map';
import dynamic from 'next/dynamic';
import { Coordinates } from '../../types/types';
import Sidebar from '@/components/ui/Sidebar';

export default function Home() {
    const MapWithNoSSR = dynamic(() => import('@/components/map'), {
        ssr: false,
    });

    const transformerMarkers: Marker[] = [
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [27.71, 85.31] },
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [28.73, 85.35] },
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [29.73, 85.34] },
    ];

    return (
        <main className="flex min-h-screen flex-row">
            <Sidebar />
            <div id="map" className="overflow-hidden">
                <MapWithNoSSR
                    center={[27.714889, 85.312917]}
                    transformerMarkers={transformerMarkers}
                    height={'70vh'}
                    width={'100vw'}
                />
            </div>
        </main>
    );
}

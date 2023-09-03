import { Input } from '@/components/ui/input';
import Map from '@/components/map';
import dynamic from 'next/dynamic';
import { Coordinates } from '../../types/types';

export default function Home() {
    const MapWithNoSSR = dynamic(() => import('@/components/map'), {
        ssr: false,
    });

    const transormerCoordinates: Coordinates[] = [
        [27.714889, 85.312917],
        [27.730312, 85.355778],
        [27.734086, 85.347002],
    ];

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Input />
            <div id="map">
                <MapWithNoSSR
                    center={[27.714889, 85.312917]}
                    markerUrl="https://cdn-icons-png.flaticon.com/512/649/649813.png"
                    transformerMarkerCoordinates={transormerCoordinates}
                    height={'60vh'}
                    width={'100vw'}
                />
            </div>
        </main>
    );
}

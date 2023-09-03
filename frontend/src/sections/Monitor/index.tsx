import { useState } from 'react';
import SearchBar from '@/components/searchbar';
import dynamic from 'next/dynamic';
import transformers from '../../../db/transformers';

export default function Home() {
    const [center, setCenter] = useState<[number, number]>([85, 27.1]);
    const MapWithNoSSR = dynamic(() => import('@/components/map'));

    const handleCenterChange = (center: [number, number]) => {
        const centerRev:[number, number] = center.reverse() as [number, number];
        setCenter(centerRev);
    };

    return (
        <div id="map" className="overflow-hidden">
            <SearchBar onLocationSelect={handleCenterChange} />
            <MapWithNoSSR center={center} transformers={transformers} height={'70vh'} width={'100vw'} />
        </div>
      );
}

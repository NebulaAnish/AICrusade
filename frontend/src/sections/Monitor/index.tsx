import { useState } from 'react';
import SearchBar from '@/components/searchbar';
import dynamic from 'next/dynamic';
import { Transformer } from '../../../types/types';
// import transformers from '../../../db/transformers';

export default function Home() {
    const [center, setCenter] = useState<[number, number]>([85, 27.1]);
    const [transformers, setTransformers] = useState<Transformer[]>([]);
    const [name, setName] = useState<string>('');
    const MapWithNoSSR = dynamic(() => import('@/components/map'));

    const handleCenterChange = (center: [number, number], name: string) => {
        const centerRev: [number, number] = center.reverse() as [number, number];
        setCenter(centerRev);
        setName(name);
    };

    

    return (
        <div id="map" className="overflow-hidden">
            <SearchBar onLocationSelect={handleCenterChange} />
            <MapWithNoSSR
                center={center}
                transformers={transformers}
                containerStyle={{ height: '70vh', width: '88vw' }}
            />
        </div>
    );
}

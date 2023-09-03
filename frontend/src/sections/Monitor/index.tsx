import { useEffect, useState } from 'react';
import SearchBar from '@/components/searchbar';
import dynamic from 'next/dynamic';
import transformers from '../../../db/transformers';
import useFetchData from '@/hooks/useFetchData';

export default function Home() {
    const [center, setCenter] = useState<[number, number]>([85, 27.1]);
    const [name, setName] = useState<string>('');
    const { data, fetchAllData, error } = useFetchData();
    const MapWithNoSSR = dynamic(() => import('@/components/map'));

    const handleCenterChange = (center: [number, number], name: string) => {
        const centerRev:[number, number] = center.reverse() as [number, number];
        setCenter(centerRev);
        setName(name);
    };

    useEffect(() => {
        fetchAllData();
    }, []);

    if (error) {
        return <div>Failed to load</div>;
    }
    console.log(data);

    return (
        <div id="map" className="overflow-hidden">
            <SearchBar onLocationSelect={handleCenterChange} />
            <MapWithNoSSR center={center} transformers={transformers} containerStyle={{ height: "70vh", width: "100vw"}} />
        </div>
      );
}

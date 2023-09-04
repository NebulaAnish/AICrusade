import { useState, useEffect } from 'react';
import SearchBar from '@/components/searchbar';
import dynamic from 'next/dynamic';
import { Toaster, toast } from "react-hot-toast";
import { Transformer } from '../../../types/types';
import useFetchData from '@/hooks/useFetchData';
import { Skeleton } from '@/components/ui/skeleton';
// import transformers from '../../../db/transformers';

export default function Home() {
    const [center, setCenter] = useState<[number, number]>([85, 27.1]);
    const [transformers, setTransformers] = useState<Transformer[]>([]);
    const [name, setName] = useState<string>('');
    const { data, fetchNearData, isLoading, error } = useFetchData();
    const MapWithNoSSR = dynamic(() => import('@/components/map'));

    const handleCenterChange = (center: [number, number], name: string) => {
        const centerRev: [number, number] = center.reverse() as [number, number];
        setCenter(centerRev);
        setName(name);
    };

    const handleDrag = (map: any, e: any) => {
        // console.log(e.target.transform._center)
        const { lng, lat } = e.target.transform._center;
        setCenter([lng, lat]);
    };

    useEffect(() => {
        fetchNearData(center[1], center[0]);
    }, [center]);
    if (error) {
        toast.error(error);
    }
    return (
        <div id="map" className="overflow-hidden">
            <Toaster />
            <SearchBar onLocationSelect={handleCenterChange} />
            {isLoading || data === undefined ? (
                <Skeleton className="w-[88vw] h-[70vh]" />
            ) : (
                <MapWithNoSSR 
                handleDrag={(map, e) => handleDrag(map, e)}
                 center={center} transformers={data} containerStyle={{ height: '70vh', width: '88vw' }} />
            )}
        </div>
    );
}

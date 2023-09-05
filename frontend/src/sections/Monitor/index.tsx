import { useState, useEffect } from 'react';
import SearchBar from '@/components/searchBar';
import MapComponent from '@/components/map';
import { Toaster, toast } from 'react-hot-toast';
import useFetchData from '@/hooks/useFetchData';
import { Skeleton } from '@/components/ui/Skeleton';
import { faultyTransformer, normalTransformer } from '../../../db/images';

export default function Home() {
    const [center, setCenter] = useState<[number, number]>([85, 27.1]);
    const [name, setName] = useState<string>('');
    const { data, fetchNearData, isLoading, error } = useFetchData();

    const handleCenterChange = (center: [number, number], name: string) => {
        const centerRev: [number, number] = center.reverse() as [number, number];
        setCenter(centerRev);
        setName(name);
    };

    const handleDrag = (map: any, e: any) => {
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
                <MapComponent
                    handleDrag={(map, e) => handleDrag(map, e)}
                    center={center}
                    transformers={data}
                    containerStyle={{ height: '70vh', width: '88vw' }}
                />
            )}
            <div className="mt-2 shadow-md rounded-md p-3 flex flex-col font-md">
                <div className="flex flex-row gap-2">
                    <span>Normal Transformer:</span>{' '}
                    <img src={normalTransformer} className="w-[20px]" alt="Normal transformer" />{' '}
                </div>
                <div className="mt-2 flex flex-row gap-2">
                    <span>Faulty Transformer: </span>{' '}
                    <img className="w-[20px]" src={faultyTransformer} alt=" Faulty transformer" />{' '}
                </div>
            </div>
        </div>
    );
}

import { Input } from '@/components/ui/input';
import Map, { Marker } from '@/components/map';
import dynamic from 'next/dynamic';
import Sidebar from '@/components/ui/Sidebar';
import { useState } from 'react';
import Analytics from '@/sections/Analytics';
import Monitor from '@/sections/Monitor';
import NewTransformer from '@/sections/NewTransformer';

const buttons = ['Monitor', 'Add new transformer', 'Analytics'];

export default function Home() {
    const MapWithNoSSR = dynamic(() => import('@/components/map'));
    const transformerMarkers: Marker[] = [
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [27.71, 85.31] },
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [28.73, 85.35] },
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

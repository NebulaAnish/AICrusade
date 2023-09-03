import { Marker } from '@/components/map';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import SearchBar from '@/components/searchbar';

const buttons = ['Monitor', 'Add new transformer', 'Analytics'];

export default function Home() {
    const MapWithNoSSR = dynamic(() => import('@/components/map'));
    const [transformerMarkers, setTransformerMarkers] = useState<Marker[]>([
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [27.2, 85] },
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [27, 85.1] },
        { img: 'https://cdn-icons-png.flaticon.com/512/649/649813.png', coordinates: [27.1, 85.23] },
      ]);
    
      const handleLocationSelect = (location: [number, number]) => {
        // Add the selected location to the transformerMarkers state
        const newTransformerMarkers = [...transformerMarkers, { img: 'YOUR_IMAGE_URL', coordinates: location }];
        setTransformerMarkers(newTransformerMarkers);
      };
    
      return (
        <div id="map" className="overflow-hidden">
          <SearchBar onLocationSelect={handleLocationSelect} />
          <MapWithNoSSR
            center={[85.312917, 27.714889]}
            transformerMarkers={transformerMarkers}
            height={'70vh'}
            width={'100vw'}
          />
        </div>
      );
}

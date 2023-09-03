import dynamic from 'next/dynamic';
import transformers from '../../../db/transformers';

export default function Home() {
    const MapWithNoSSR = dynamic(() => import('@/components/map'));

    return (
        <div id="map" className="overflow-hidden">
            <MapWithNoSSR center={[85, 27.1]} transformers={transformers} height={'70vh'} width={'100vw'} />
        </div>
      );
}

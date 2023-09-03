import { Marker } from '@/components/map';
import dynamic from 'next/dynamic';
import { Transformer } from '../../../types/types';
import transformers from '../../../db/transformers';

const buttons = ['Monitor', 'Add new transformer', 'Analytics'];

export default function Home() {
    const MapWithNoSSR = dynamic(() => import('@/components/map'));

    return (
        <div id="map" className="overflow-hidden">
            <MapWithNoSSR center={[85, 27.1]} transformers={transformers} height={'70vh'} width={'100vw'} />
        </div>
    );
}

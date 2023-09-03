import Sidebar from '@/components/ui/Sidebar';
import { useState } from 'react';
import Analytics from '@/sections/Analytics';
import Monitor from '@/sections/Monitor';
import NewTransformer from '@/sections/NewTransformer';

const buttons = ['Monitor', 'Add new transformer', 'Analytics'];

export default function Home() {
    const [active, setActive] = useState<number>(0);

    const handleButtonClick = (index: number) => {
        setActive(index);
    };

    return (
        <main className="flex min-h-screen flex-row">
            <Sidebar
                    {...{
                        active,
                        handleButtonClick,
                        buttons,
                    }}
                />
            <div className='grow'>
                {active === 0 ? <Monitor /> : <></>}
                {active === 1 ? <NewTransformer /> : <></>}
                {active === 2 ? <Analytics /> : <></>}
            </div>
        </main>
    );
}

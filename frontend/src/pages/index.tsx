import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import dynamic from "next/dynamic";
import SideBar from '@/components/ui/Sidebar';

export default function Home() {
    const MapWithNoSSR = dynamic(() => import("@/components/map"), {
        ssr: false
      });
    
  return (
    <main className="flex min-h-screen flex-row">
      <SideBar />
      <div id="map">
        <MapWithNoSSR />
      </div>
    </main>
  )
}

import { Input } from '@/components/ui/input';
import Map from '@/components/map';
import dynamic from "next/dynamic";

export default function Home() {
    const MapWithNoSSR = dynamic(() => import("@/components/map"), {
        ssr: false
      });
    
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Input />
      <div id="map">
        <MapWithNoSSR />
      </div>
    </main>
  )
}

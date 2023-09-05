import { Skeleton } from "@/components/ui/Skeleton";

export default function Analytics() {
  return (
    <>
    <div className="text-3xl flex justify-center py-5">
      <h1>Analytic Charts (Skeleton)</h1>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-6 ">
      <Skeleton className="w-[100%] h-[100%] mx-2" />
      <Skeleton className="w-[38vw] h-[40vh]" />
      <Skeleton className="w-[100%] h-[100%] mx-2" />
      <Skeleton className="w-[38vw] h-[40vh]" />
    </div>
    </>
  );
}

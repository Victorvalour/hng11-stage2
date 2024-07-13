import { Skeleton } from "./ui/skeleton";

export function ProductSkeleton() {
  return (
    <div className="">
      <div className="space-y-2 ">
        <Skeleton className="h-[305px] w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-12 w-[80%]" />
          <Skeleton className="h-6 w-[50%]" />
          <Skeleton className="h-6 w-[50%]" />
        </div>
      </div>
    </div>
  );
}

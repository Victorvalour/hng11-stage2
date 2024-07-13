import { Skeleton } from "./ui/skeleton";

export function GridSkeleton() {
  const itemArray: any = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
      {itemArray.map((item: any) => {
        return (
          <div className="space-y-2 " key={item}>
            <Skeleton className="h-[255px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[80%]" />
              <Skeleton className="h-4 w-[50%]" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

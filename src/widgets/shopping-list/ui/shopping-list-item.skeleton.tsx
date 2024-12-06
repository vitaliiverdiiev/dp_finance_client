import { Skeleton } from '@/shared/ui';

export const ShoppingListItemSkeleton = () => {
  return (
    <li className="flex items-center gap-4 w-full">
      <Skeleton className="size-4" />
      <div className="flex justify-between gap-4 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-12" />
      </div>
      <Skeleton className="size-4" />
    </li>
  );
};

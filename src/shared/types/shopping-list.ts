export type ShoppingListType = {
  name: string;
  amount: number;
  id?: string;
  isCompleted?: boolean;
  isAbsent?: boolean;
  unit?: 'kg' | 'pc';
};

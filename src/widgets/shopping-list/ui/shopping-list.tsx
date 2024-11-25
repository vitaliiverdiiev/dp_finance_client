import { ShoppingListType } from '@/shared/types';
import { deleteItemHandler } from '@/shared/utils';
import { useShoppingList } from '../model/use-shopping-list';
import { ShoppingListItem } from './shopping-list-item';

type Props = {
  items: ShoppingListType[];
};

export const ShoppingList: React.FC<Props> = ({ items = [] }) => {
  const { deleteItem } = useShoppingList();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-start gap-2 border-2 rounded-xl p-4">
        <span>No items...</span>
      </div>
    );
  }

  return (
    <ul className="flex flex-col items-start gap-2 p-4 card">
      {items.map((item: UnknownType) => (
        <ShoppingListItem 
          key={item.id} 
          item={item} 
          removeItem={() => deleteItemHandler(deleteItem, item.id)}
        />
      ))}
    </ul>
  );
};

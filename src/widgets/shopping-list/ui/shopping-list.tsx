import { ShoppingListType } from '@/shared/types';
import { useShoppingList } from '../model/use-shopping-list';
import { deleteItemHandler } from '@/shared/utils';
import { ShoppingListItem } from './shopping-list-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

type Props = {
  items: ShoppingListType[];
};

export const ShoppingList: React.FC<Props> = ({ items = [] }) => {
  const { deleteItem, updateItem } = useShoppingList();

  return (
    <Card>
      <CardHeader className="flex justify-between items-center flex-row">
        <CardTitle>28.09.2024</CardTitle>
        <span>Total: <b>{items.length}</b> items</span>
      </CardHeader>
      <CardContent>

        <ul className="space-y-4">
          {!items && <span>No items...</span>}

          {items.map((item: UnknownType) => (
            <ShoppingListItem
              key={item.id}
              item={item}
              removeItem={() => deleteItemHandler(deleteItem, item.id)}
              markAsCompleted={() => updateItem({ variables: { id: item.id, input: { isCompleted: !item.isCompleted } } })}
            />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

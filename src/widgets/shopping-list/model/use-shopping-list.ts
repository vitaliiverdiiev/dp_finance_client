import { useMutation } from '@apollo/client';
import { toast } from 'sonner';
import { 
  DELETE_SHOPPING_LIST_ITEM, 
  GET_SHOPPING_LIST_ITEMS,
  UPDATE_SHOPPING_LIST_ITEM 
} from '@/entities/shopping-list';

export const useShoppingList = () => {
  const [deleteItem] = useMutation(DELETE_SHOPPING_LIST_ITEM, {
    onCompleted: (data) => {
      toast(`${data.deleteShoppingListItem.name} was removed from the list`);
    },
    onError: (data) => {
      toast(`Error: ${data.message}`);
    },
    refetchQueries: [{ query: GET_SHOPPING_LIST_ITEMS }]
  });

  const [updateItem] = useMutation(UPDATE_SHOPPING_LIST_ITEM);

  return { deleteItem, updateItem };
};

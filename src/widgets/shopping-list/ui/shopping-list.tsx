import { Link } from "react-router";
import { ShoppingListType } from "@/shared/types";
import { Button, Checkbox } from "@/shared/ui";
import { TrashSimple } from "@phosphor-icons/react";
import { useMutation } from "@apollo/client";
import {
  DELETE_SHOPPING_LIST_ITEM,
  GET_SHOPPING_LIST_ITEMS,
} from "@/pages/shopping-list/model/schemas/shopping-list.gql";
import { toast } from "sonner";

type Props = {
  items: ShoppingListType[];
};

export const ShoppingList: React.FC<Props> = ({ items = [] }) => {
  const [deleteItem] = useMutation(DELETE_SHOPPING_LIST_ITEM, {
    onCompleted: (data) => {
      toast(`${data.deleteShoppingList.name} was removed from the list`);
    },
    refetchQueries: [{ query: GET_SHOPPING_LIST_ITEMS }],
  });

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-start gap-2 border-2 rounded-xl p-4">
        <span>No items...</span>
      </div>
    );
  }

  return (
    <ul className="flex flex-col items-start gap-2 border-2 rounded-xl p-4">
      {items.map((item: any) => (
        <li
          key={item.id}
          className="flex items-center justify-between gap-4 w-full"
        >
          <div className="flex items-center gap-3">
            <Checkbox />
            <Link to={item.id}>
              <span className="text-lg font-medium">{item.name}</span> -{" "}
              <span>{item.amount}</span>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="hover:text-red-500 transition-colors"
            onClick={() => deleteItem({ variables: { id: item.id } })}
          >
            <TrashSimple size={20} />
          </Button>
        </li>
      ))}
    </ul>
  );
};

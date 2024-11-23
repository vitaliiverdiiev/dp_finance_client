import { useParams } from "react-router";
import { GET_SHOPPING_LIST_ITEM } from "../model/schemas/shopping-list.gql";
import { useQuery } from "@apollo/client";

export const ShoppingListItemPage = () => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_SHOPPING_LIST_ITEM, {
    variables: { id: params.id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { shoppingList } = data;

  console.log({ shoppingList });

  return (
    <div>
      <p>{shoppingList.id}</p>
      <p>{shoppingList.name}</p>
      <p>{shoppingList.amount}</p>
      <p>{shoppingList.createdAt}</p>
      <p>{shoppingList.updatedAt}</p>
    </div>
  );
};

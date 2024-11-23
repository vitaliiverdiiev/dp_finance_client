import { ShoppingListForm } from "@/widgets";
import { useQuery } from "@apollo/client";
import { GET_SHOPPING_LIST_ITEMS } from "../model/schemas/shopping-list.gql";
import { Link } from "react-router";
import { TrashSimple } from "@phosphor-icons/react";
import { Button } from "@/shared/ui";

export const ShoppingListPage = () => {
  const { loading, error, data } = useQuery(GET_SHOPPING_LIST_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log({ data });

  return (
    <section>
      <div className="container">
        <h1 className="mb-8 font-semibold text-4xl uppercase">Shopping List</h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <ul className="flex flex-col items-start gap-2 border-2 rounded-xl p-4">
              {data.shoppingLists.map((item: any) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-4 w-full"
                >
                  <Link to={item.id}>
                    <span>{item.name}</span> - <span>{item.amount}</span>
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-red-500 transition-colors"
                  >
                    <TrashSimple size={20} />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ShoppingListForm />
          </div>
        </div>
      </div>
    </section>
  );
};

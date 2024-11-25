import { ShoppingListForm } from "@/widgets";
import { useQuery } from "@apollo/client";
import { GET_SHOPPING_LIST_ITEMS } from "../model/schemas/shopping-list.gql";
import { Error, Loader, PageTitle } from "@/shared/ui";
import { ShoppingList } from "@/widgets/shopping-list/ui/shopping-list";

export const ShoppingListPage = () => {
  const { loading, error, data } = useQuery(GET_SHOPPING_LIST_ITEMS, {
    
  });

  if (loading) return <Loader />;
  if (error) return <Error message={error.message} />;

  console.log({ data });

  return (
    <section>
      <div className="container">
        <PageTitle title="Shopping list" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ShoppingList items={data.shoppingLists} />
          </div>
          <div className="space-y-4">
            <ShoppingListForm />
          </div>
        </div>
      </div>
    </section>
  );
};

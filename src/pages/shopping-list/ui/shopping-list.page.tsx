import { ShoppingListForm } from '@/widgets';
import { useQuery } from '@apollo/client';
import { GET_SHOPPING_LIST_ITEMS } from '../../../entities/shopping-list/schemas/shopping-list.gql';
import { Error, PageTitle } from '@/shared/ui';
import { ShoppingList } from '@/widgets/shopping-list/ui/shopping-list';
import { ShoppingListItemSkeleton } from '@/widgets/shopping-list/ui/shopping-list-item.skeleton';
import { Helmet } from 'react-helmet';

export const ShoppingListPage = () => {
  const { loading, error, data } = useQuery(GET_SHOPPING_LIST_ITEMS);

  // if (loading) return <Loader />;
  if (error) return <Error message={error.message} />;

  console.log({ data });

  return (
    <>
      <Helmet>
        <title>Shopping list</title>
        <meta name="description" content="Shopping list page"/>
        <meta name="keywords" content="shopping list,personal fiance"/>
      </Helmet>
      <section>
        <div className="container">
          <PageTitle title="Shopping list" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {loading && <ShoppingListItemSkeleton />}
              {data && <ShoppingList items={data?.shoppingList} />}
            </div>
            <div className="space-y-4">
              <ShoppingListForm />
            </div>
          </div>
        </div>
      </section>
    </> 
  );
};

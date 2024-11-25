import { PropsWithChildren } from 'react';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri  : `${import.meta.env.VITE_API_URI  }/graphql`,
  cache: new InMemoryCache()
});

export const ApolloClientProvider: React.FC<PropsWithChildren> = ({
  children
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

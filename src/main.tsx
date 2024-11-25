import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'sonner';
import { ApolloClientProvider, RoutesProvider } from './shared/config';

import './app/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloClientProvider>
      <RoutesProvider />
    </ApolloClientProvider>
    <Toaster />
  </StrictMode>
);

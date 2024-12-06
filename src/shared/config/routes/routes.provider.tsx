import { BrowserRouter, Route, Routes } from 'react-router';
import { ShoppingListPage, UserPage } from '@/pages';
import App from '@/App';
import { ShoppingListItemPage } from '@/pages/shopping-list/ui/shopping-list-item.page';
import { DashboardLayout } from '@/widgets/layouts/dashboard.layout';
import { UsersPage } from '@/pages/users/ui/users.page';
import { UnderMaintenance } from '@/widgets';

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<App />} />
          <Route path="shopping-list">
            <Route index element={<UnderMaintenance />} />
            <Route path=":id" element={<ShoppingListItemPage />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersPage />} />
            <Route path=":id" element={<UserPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

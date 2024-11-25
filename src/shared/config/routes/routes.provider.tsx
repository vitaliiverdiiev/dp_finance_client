import { BrowserRouter, Route, Routes } from "react-router";
import { ShoppingListPage } from "@/pages";
import App from "@/App";
import { ShoppingListItemPage } from "@/pages/shopping-list/ui/shopping-list-item.page";
import { DashboardLayout } from "@/widgets/layouts/dashboard.layout";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<App />} />
          <Route path="shopping-list">
            <Route index element={<ShoppingListPage />} />
            <Route path=":id" element={<ShoppingListItemPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

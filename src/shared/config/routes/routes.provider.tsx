import { BrowserRouter, Route, Routes } from "react-router";
import { ShoppingListPage } from "../../../pages";
import App from "../../../App";
import { ShoppingListItemPage } from "@/pages/shopping-list/ui/shopping-list-item.page";

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="shopping-list">
          <Route index element={<ShoppingListPage />} />
          <Route path=":id" element={<ShoppingListItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

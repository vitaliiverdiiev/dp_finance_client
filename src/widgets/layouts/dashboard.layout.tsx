import { Outlet } from "react-router";
import { Header } from "@/widgets/header";

export const DashboardLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

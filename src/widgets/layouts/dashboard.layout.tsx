import { Outlet } from 'react-router';
import { Header } from '@/widgets/header';

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

import { Helmet } from 'react-helmet';

export const UsersPage = () => {
  return (
    <>
      <Helmet>
        <title>Users</title>
        <meta name="description" content="dp.finance users"/>
        <meta name="keywords" content="users, personal fiance"/>
      </Helmet>
      <main>
        <div className="container">
          <h1>Users</h1>
        </div>
      </main>
    </>
  );
};
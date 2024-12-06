import { Helmet } from 'react-helmet';
import { useParams } from 'react-router';

export const UserPage = () => {
  const params = useParams();
  const getData = (id: string) => id;
  const idshka = getData(params.id!);
  return (
    <>
      <Helmet>
        <title>User {idshka}</title>
        <meta name="description" content="dp.finance users"/>
        <meta name="keywords" content="users, personal fiance"/>
      </Helmet>
      <main>
        <div className="container">
          <h1>User {params.id}</h1>
        </div>
      </main>
    </>
  );
};
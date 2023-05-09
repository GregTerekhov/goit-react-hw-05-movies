import { Outlet } from 'react-router-dom';
import { Header, Navigation, PageLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <PageLink to="/">Home</PageLink>
          <PageLink to="/movies">Movies</PageLink>
        </Navigation>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

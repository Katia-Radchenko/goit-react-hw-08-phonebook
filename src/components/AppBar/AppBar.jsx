import { useAuth } from 'hooks/useAuth';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};

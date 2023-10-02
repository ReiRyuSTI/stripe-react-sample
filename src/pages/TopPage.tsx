import { Link } from 'react-router-dom';

import { UserInfoComponent } from '@/components/modules/UserInfoComponent/UserInfoComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';
import { useUserState } from '@/hooks/useUserState';
import { LoadingComponent } from '@/pages/LoadingPage';

export const TopPage = () => {
  const { userId } = useAzureAuth();
  const { user, isLoadingUser } = useUserState(userId);

  if (isLoadingUser || !user) return <LoadingComponent />;
  return (
    <main className="flex flex-col gap-4">
      <UserInfoComponent user={user} />
      <Link to={'setupIntent'}>setupIntent</Link>
    </main>
  );
};

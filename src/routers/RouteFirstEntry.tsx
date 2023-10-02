import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAzureAuth } from '@/hooks/useAzureAuth';
import { useUserState } from '@/hooks/useUserState';
import { LoadingComponent } from '@/pages/LoadingPage';

export const RouteFirstEntry = ({ component }: { component: React.ReactNode }) => {
  const { userId } = useAzureAuth();
  const { isLoadingUser, isFirstEntry } = useUserState(userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && isFirstEntry) navigate('/application');
  }, [isFirstEntry, isLoadingUser, navigate]);

  if (isLoadingUser) return <LoadingComponent />;
  return <>{component}</>;
};

export const RouteSecondEntry = ({ component }: { component: React.ReactNode }) => {
  const { userId } = useAzureAuth();
  const { isLoadingUser, isFirstEntry } = useUserState(userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoadingUser && !isFirstEntry) navigate('/');
  }, [isFirstEntry, isLoadingUser, navigate]);

  if (isLoadingUser) return <LoadingComponent />;
  return <>{component}</>;
};

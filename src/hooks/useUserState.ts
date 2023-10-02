import { useMemo } from 'react';

import useSWR from 'swr';

import { updateDefaultPaymentMethod, userCreate, userRead } from '@/api/user';

export const useUserState = (uuid: string) => {
  const { data: response, isLoading: isLoadingUser, mutate: mutateUser } = useSWR(`user/${uuid}`, () => userRead(uuid));
  const isFirstEntry = useMemo(() => {
    if (!response) return false;
    if (response.status == 200) return false;
    return true;
  }, [response]);
  const user = useMemo(() => response?.data, [response]);
  return { user, isLoadingUser, isFirstEntry, mutateUser };
};

export const uesUserFunction = () => {
  return { userCreate, updateDefaultPaymentMethod };
};

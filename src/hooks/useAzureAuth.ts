import { useCallback, useMemo } from 'react';

import { useAccount, useIsAuthenticated, useMsal } from '@azure/msal-react';

import { AzureClientId } from '@/constants/authAzure';

export const useAzureAuth = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const account = useAccount(accounts[0]) || undefined;

  const logoutAzure = useCallback(async () => {
    instance.logout();
  }, [instance]);

  const authenticationResult = useCallback(async () => {
    const result = await instance.acquireTokenSilent({
      scopes: ['openid', AzureClientId],
      account: account,
    });
    return result;
  }, [instance, account]);

  const userId = useMemo(() => {
    if (!account || !account.idTokenClaims || !account.idTokenClaims.sub) return '';
    const id = account.idTokenClaims.sub;
    return id;
  }, [account]);

  return {
    logoutAzure,
    userId,
    isAuthenticated,
    authenticationResult,
    account,
  };
};

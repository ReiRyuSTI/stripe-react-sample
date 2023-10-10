import { useCallback, useMemo } from 'react';

import { useAccount, useIsAuthenticated, useMsal } from '@azure/msal-react';

import { AzureScopes } from '@/constants/authAzure';

export const useAzureAuth = () => {
  const { instance, accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const account = useAccount(accounts[0]) ?? undefined;

  const logoutAzure = useCallback(async () => {
    instance.logout();
  }, [instance]);

  const authenticationResult = useCallback(async () => {
    const result = await instance.acquireTokenSilent({
      scopes: AzureScopes,
      account: account,
    });
    return result;
  }, [instance, account]);

  const userId = useMemo(() => {
    if (!account || !account.idTokenClaims || !account.idTokenClaims.sub) return '';
    const id = account.idTokenClaims.sub;
    return id;
  }, [account]);

  const userEmail = useMemo(() => {
    if (!account || !account.idTokenClaims || !account.idTokenClaims.emails) return '';
    if (typeof account.idTokenClaims.emails == 'string') return account.idTokenClaims.emails;
    return account.idTokenClaims.emails.join();
  }, [account]);

  return {
    logoutAzure,
    userId,
    userEmail,
    isAuthenticated,
    authenticationResult,
    account,
  };
};

import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

import { msalConfig } from '@/constants/authAzure';

export const AzureConfigComponent = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const pca = new PublicClientApplication(msalConfig);
  return <MsalProvider instance={pca}>{children}</MsalProvider>;
};

import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { MsalAuthenticationTemplate, MsalProvider } from '@azure/msal-react';

import { AzureScopes, msalConfig } from '@/constants/authAzure';
import { NormalErrorPage } from '@/pages/Error/NormalErrorPage';
import { LoadingComponent } from '@/pages/LoadingPage';

export const AzureConfigComponent = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const pca = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={pca}>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        errorComponent={NormalErrorPage}
        authenticationRequest={{
          scopes: AzureScopes,
        }}
        loadingComponent={LoadingComponent}
      >
        {children}
      </MsalAuthenticationTemplate>
    </MsalProvider>
  );
};

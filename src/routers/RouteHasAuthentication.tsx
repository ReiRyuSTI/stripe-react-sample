import { InteractionType } from '@azure/msal-browser';
import { MsalAuthenticationTemplate } from '@azure/msal-react';

import { NormalErrorPage } from '@/pages/Error/NormalErrorPage';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const RouteHasAuthentication = (props: { children: React.ReactNode }) => {
  const { children } = props;
  return (
    <>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        errorComponent={NormalErrorPage}
        authenticationRequest={{ scopes: ['openid'] }}
        loadingComponent={LoadingComponent}
      >
        {children}
      </MsalAuthenticationTemplate>
    </>
  );
};

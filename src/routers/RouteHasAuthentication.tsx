import { Outlet } from 'react-router-dom';

import { InteractionType } from '@azure/msal-browser';
import { MsalAuthenticationTemplate } from '@azure/msal-react';

import { AzureClientId } from '@/constants/authAzure';
import { NormalErrorPage } from '@/pages/Error/NormalErrorPage';
import { LoadingComponent } from '@/utilities/LoadingComponent';

export const RouteHasAuthentication = () => {
  console.log(AzureClientId);

  return (
    <>
      <MsalAuthenticationTemplate
        interactionType={InteractionType.Redirect}
        errorComponent={NormalErrorPage}
        authenticationRequest={{
          scopes: ['openid'],
        }}
        loadingComponent={LoadingComponent}
      >
        <Outlet />
      </MsalAuthenticationTemplate>
    </>
  );
};

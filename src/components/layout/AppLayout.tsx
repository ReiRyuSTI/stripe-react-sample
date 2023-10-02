import { SWRConfig } from 'swr';

import { FooterComponent } from '@/components/common/FooterComponent/FooterComponent';
import { HeaderComponent } from '@/components/common/HeaderComponent/HeaderComponent';
import { AxiosErrorHandlingComponent } from '@/utilities/AxiosConfig';
import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';

type Props = {
  children: React.ReactNode;
};

export const AppLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <HeaderComponent />
      <main className="flex h-full w-full grow flex-col">
        <ErrorBoundaryComponent>
          <AxiosErrorHandlingComponent>
            <SWRConfig>{children}</SWRConfig>
          </AxiosErrorHandlingComponent>
        </ErrorBoundaryComponent>
      </main>
      <FooterComponent />
    </>
  );
};

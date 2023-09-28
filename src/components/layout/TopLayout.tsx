import { SWRConfig } from 'swr';

import { AxiosErrorHandlingComponent } from '@/utilities/AxiosConfig';
import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';

type Props = {
  children: React.ReactNode;
};

export const TopLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <ErrorBoundaryComponent>
        <AxiosErrorHandlingComponent>
          <SWRConfig>{children}</SWRConfig>
        </AxiosErrorHandlingComponent>
      </ErrorBoundaryComponent>
    </>
  );
};

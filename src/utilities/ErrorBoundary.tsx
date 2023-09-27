import React from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import axios from 'axios';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.error(error);
  if (axios.isAxiosError(error) && error.response) return <></>;
  return <button onClick={resetErrorBoundary}>Error</button>;
};

type Props = {
  children: React.ReactNode;
};
export const ErrorBoundaryComponent = (props: Props) => {
  const { children } = props;

  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
};

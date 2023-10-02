import { useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { useAzureAuth } from '@/hooks/useAzureAuth';

export const axiosClient = axios.create({
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

type Props = {
  children: React.ReactNode;
};

export const AxiosErrorHandlingComponent = (props: Props) => {
  const { children } = props;
  const { authenticationResult } = useAzureAuth();
  const { showBoundary } = useErrorBoundary();

  const requestInterceptor = axiosClient.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
    try {
      const result = await authenticationResult();
      config.headers.Authorization = 'Bearer ' + result.accessToken;
      return config;
    } catch (e) {
      console.warn(e);
      return config;
    }
  });

  const responseInterceptor = axiosClient.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      showBoundary(error);
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
      axiosClient.interceptors.request.eject(requestInterceptor);
    };
  }, [requestInterceptor, responseInterceptor]);

  return <>{children}</>;
};

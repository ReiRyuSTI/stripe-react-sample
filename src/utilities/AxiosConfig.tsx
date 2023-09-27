import { useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { useAzureAuth } from '@/hooks/useAzureAuth';

export const axiosClient = axios.create({
  timeout: 10000,
});

type Props = {
  children: React.ReactNode;
};

export const AxiosErrorHandlingComponent = (props: Props) => {
  const { children } = props;
  const { authenticationResult, isAuthenticated } = useAzureAuth();

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    const requestInterceptor = axiosClient.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const result = await authenticationResult();

        if (!config.headers.Authorization) {
          config.headers.Authorization = 'Bearer ' + result.accessToken;
        }
        return config;
      }
    );
    const responseInterceptor = axiosClient.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        showBoundary(error);
        return Promise.reject(error);
      }
    );
    // クリーンアップ
    return () => {
      axiosClient.interceptors.response.eject(responseInterceptor);
      axiosClient.interceptors.request.eject(requestInterceptor);
    };
  }, [isAuthenticated, authenticationResult, showBoundary]);

  return <>{children}</>;
};

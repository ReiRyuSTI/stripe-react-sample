import { checkoutSessionType } from '@/types/checkoutSession.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchSetupPaymentMethodCheckoutSession = async (uid: string): Promise<string> => {
  const response = await axiosClient.get<checkoutSessionType>(`api/checkout-session/${uid}`);
  return response.data.url;
};

export const createCheckoutSession = async (uid: string, priceID: string) => {
  const response = await axiosClient.post<checkoutSessionType>(`api/checkout-session/${uid}`, { priceID });
  return response.data.url;
};

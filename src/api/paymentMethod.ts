import type { customerPortalSessionType, paymentSetupIntentType, stripePubKeyType } from '@/types/paymentMethod.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const paymentSetupIntent = async (uid: string): Promise<string> => {
  const response = await axiosClient.get<paymentSetupIntentType>(`api/payment-method/setupIntent/${uid}`);
  return response.data.clientSecret;
};

export const fetchStripePubKey = async (): Promise<string> => {
  const response = await axiosClient.get<stripePubKeyType>('/api/payment-method/info');
  return response.data.pubKey;
};

export const fetchCustomerPortal = async (uid: string): Promise<string> => {
  const response = await axiosClient.get<customerPortalSessionType>(`api/payment-method/customerPortal/${uid}`);
  return response.data.url;
};

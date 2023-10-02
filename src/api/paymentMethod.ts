import type { paymentSetupIntentType, stripePubKeyType } from '@/types/paymentMethod.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const paymentSetupIntent = async (uid: string): Promise<string> => {
  const response = await axiosClient.get<paymentSetupIntentType>(`api/payment-method/setupIntent/${uid}`);
  return response.data.clientSecret;
};

export const fetchStripePubKey = async (): Promise<string> => {
  const response = await axiosClient.get<stripePubKeyType>('/api/payment-method/info');
  return response.data.pubKey;
};

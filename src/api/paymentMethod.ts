import type { paymentSetupIntentType } from '@/types/paymentMethod.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const paymentSetupIntent = async (uid: string): Promise<string> => {
  const response = await axiosClient.get<paymentSetupIntentType>(`api/payment-method/${uid}`);
  return response.data.id;
};

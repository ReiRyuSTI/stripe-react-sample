import { customerPortalSessionType } from '@/types/paymentMethod.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchPaymentCustomerPortal = async (uid: string): Promise<string> => {
  const response = await axiosClient.get<customerPortalSessionType>(`api/customer-portal/payment/${uid}`);
  return response.data.url;
};

export const fetchShippingCustomerPortal = async (uid: string): Promise<string> => {
  const response = await axiosClient.get<customerPortalSessionType>(`api/customer-portal/shipping/${uid}`);
  return response.data.url;
};

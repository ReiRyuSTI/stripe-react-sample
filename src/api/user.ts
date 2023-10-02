import { AxiosResponse } from 'axios';

import { API_RequestUser, user } from '@/types/user.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const userCreate = async (user: API_RequestUser): Promise<user> => {
  const response = await axiosClient.post<user>(`api/user`, user);
  return response.data;
};

export const userRead = async (uuid: string): Promise<AxiosResponse<user>> => {
  const response = await axiosClient.get<user>(`api/user/${uuid}`);
  return response;
};

export const updateDefaultPaymentMethod = async (uuid: string, paymentId: string) => {
  await axiosClient.put<void>(`api/user/${uuid}/default-payment`, {
    paymentId: paymentId,
  });
};

import { AxiosResponse } from 'axios';

import { API_RequestUpdateUser, API_RequestUser, UserType } from '@/types/user.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const userCreate = async (user: API_RequestUser): Promise<UserType> => {
  const response = await axiosClient.post<UserType>(`api/user`, user);
  return response.data;
};

export const userRead = async (uuid: string): Promise<AxiosResponse<UserType>> => {
  const response = await axiosClient.get<UserType>(`api/user/${uuid}`);
  return response;
};

export const updateUserShipping = async (uuid: string, userShipping: API_RequestUpdateUser) => {
  const response = await axiosClient.put<UserType>(`api/user/${uuid}`, userShipping);
  return response.data;
};

export const updateDefaultPaymentMethod = async (uuid: string, paymentId: string) => {
  await axiosClient.put<void>(`api/user/${uuid}/default-payment`, {
    paymentId: paymentId,
  });
};

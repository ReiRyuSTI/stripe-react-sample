import { API_RequestUser, user } from '@/types/user.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const userCreate = async (user: API_RequestUser): Promise<user> => {
  const response = await axiosClient.post<user>(`api/user`, user);
  return response.data;
};

export const userRead = async (uuid: string): Promise<user> => {
  const response = await axiosClient.get<user>(`api/user/${uuid}`);
  return response.data;
};

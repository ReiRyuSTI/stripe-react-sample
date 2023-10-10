import { ProductType } from '@/types/products.type';
import { axiosClient } from '@/utilities/AxiosConfig';

export const fetchProducts = async (): Promise<ProductType[]> => {
  const response = await axiosClient.get<ProductType[]>('api/products');
  return response.data;
};

import useSWRImmutable from 'swr/immutable';

import { fetchProducts } from '@/api/products';

export const useProducts = () => {
  const { data: products, isLoading: isLoadingProducts } = useSWRImmutable('products', fetchProducts);
  return { products, isLoadingProducts };
};

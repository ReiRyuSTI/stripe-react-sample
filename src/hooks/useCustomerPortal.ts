import { fetchPaymentCustomerPortal, fetchShippingCustomerPortal } from '@/api/customerPortal';

export const useCustomerPortalSession = () => {
  return { fetchPaymentCustomerPortal, fetchShippingCustomerPortal };
};

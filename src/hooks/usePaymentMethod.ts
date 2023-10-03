import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';

import { fetchCustomerPortal, fetchStripePubKey, paymentSetupIntent } from '@/api/paymentMethod';

export const usePaymentMethod = (uuid: string) => {
  const { data: stripePubKey, isLoading: isLoadingStripePubKey } = useSWRImmutable('stripePubKey', fetchStripePubKey);
  const { data: setupIntent, isLoading: isLoadingSetupIntent } = useSWR(`setupIntent/${uuid}`, () =>
    paymentSetupIntent(uuid)
  );
  return { setupIntent, isLoadingSetupIntent, stripePubKey, isLoadingStripePubKey };
};

export const usePaymentMethodUseCustomerPortal = (uuid: string) => {
  const { data: customerPortalUrl, isLoading: isLoadingCustomerPortalUrl } = useSWR('customerPortal', () =>
    fetchCustomerPortal(uuid)
  );
  return { customerPortalUrl, isLoadingCustomerPortalUrl };
};

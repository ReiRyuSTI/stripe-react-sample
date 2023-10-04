import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';

import { fetchStripePubKey, paymentSetupIntent } from '@/api/paymentMethod';

export const useStripePubKey = () => {
  const { data: stripePubKey, isLoading: isLoadingStripePubKey } = useSWRImmutable('stripePubKey', fetchStripePubKey);
  return { stripePubKey, isLoadingStripePubKey };
};

export const usePaymentMethodSetupIntent = (uuid: string) => {
  const { data: setupIntent, isLoading: isLoadingSetupIntent } = useSWR(`setupIntent/${uuid}`, () =>
    paymentSetupIntent(uuid)
  );
  return { setupIntent, isLoadingSetupIntent };
};

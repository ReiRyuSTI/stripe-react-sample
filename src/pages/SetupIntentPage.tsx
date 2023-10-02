import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { PaymentComponent } from '@/components/modules/PaymentComponent/PaymentComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';
import { usePaymentMethod } from '@/hooks/usePaymentMethod';
import { LoadingComponent } from '@/pages/LoadingPage';

export const SetupIntentPage = () => {
  const { userId } = useAzureAuth();
  const { setupIntent, isLoadingSetupIntent, stripePubKey, isLoadingStripePubKey } = usePaymentMethod(userId);

  if (isLoadingSetupIntent || !setupIntent) return <LoadingComponent />;
  if (isLoadingStripePubKey || !stripePubKey) return <LoadingComponent />;

  const stripePromise = loadStripe(stripePubKey);

  return (
    <>
      <Elements stripe={stripePromise} options={{ clientSecret: setupIntent }}>
        <PaymentComponent />
      </Elements>
    </>
  );
};

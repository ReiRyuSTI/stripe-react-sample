import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { PaymentComponent } from '@/components/modules/PaymentComponent/PaymentComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';
import { usePaymentMethodSetupIntent, useStripePubKey } from '@/hooks/usePaymentMethod';
import { LoadingComponent } from '@/pages/LoadingPage';

export const SetupIntentPage = () => {
  const { userId } = useAzureAuth();
  const { stripePubKey, isLoadingStripePubKey } = useStripePubKey();
  const { setupIntent, isLoadingSetupIntent } = usePaymentMethodSetupIntent(userId);

  if (isLoadingSetupIntent || !setupIntent) return <LoadingComponent />;
  if (isLoadingStripePubKey || !stripePubKey) return <LoadingComponent />;

  const stripePromise = loadStripe(stripePubKey);

  return (
    <>
      <main className="flex flex-row items-center justify-center gap-4">
        <Elements stripe={stripePromise} options={{ clientSecret: setupIntent }}>
          <PaymentComponent />
        </Elements>
      </main>
    </>
  );
};

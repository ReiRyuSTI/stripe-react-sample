import { useNavigate } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Stripe from 'stripe';

import { AddressFormComponent } from '@/components/modules/AddressFormComponent/AddressFormComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';
import { useStripePubKey } from '@/hooks/usePaymentMethod';
import { uesUserFunction, useUserState } from '@/hooks/useUserState';
import { LoadingComponent } from '@/pages/LoadingPage';

export const UserEditPage = () => {
  const { userId } = useAzureAuth();
  const { user, isLoadingUser, mutateUser } = useUserState(userId);
  const { stripePubKey, isLoadingStripePubKey } = useStripePubKey();
  const { updateUserShipping } = uesUserFunction();
  const navigate = useNavigate();

  const onSubmitUpdate = async (address: Stripe.Customer.Shipping) => {
    console.log(address);
    await updateUserShipping(userId, { shipping: address });
    mutateUser();
    navigate('/');
  };

  if (isLoadingStripePubKey || !stripePubKey) return <LoadingComponent />;
  if (isLoadingUser || !user) return <LoadingComponent />;

  const stripePromise = loadStripe(stripePubKey);

  return (
    <>
      <main className="flex flex-row items-center justify-center gap-4">
        <Elements stripe={stripePromise}>
          <AddressFormComponent shipping={user.shipping} onClick={onSubmitUpdate} />
        </Elements>
      </main>
    </>
  );
};

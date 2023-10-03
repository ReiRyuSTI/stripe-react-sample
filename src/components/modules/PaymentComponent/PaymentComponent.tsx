import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { useAzureAuth } from '@/hooks/useAzureAuth';
import { uesUserFunction, useUserState } from '@/hooks/useUserState';

export const PaymentComponent = () => {
  const stripe = useStripe();
  const elements = useElements();

  const { userId } = useAzureAuth();
  const { updateDefaultPaymentMethod } = uesUserFunction();
  const { mutateUser } = useUserState(userId);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: window.location.origin,
      },
      redirect: 'if_required',
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      const paymentMethod = result.setupIntent.payment_method as string;
      await updateDefaultPaymentMethod(userId, paymentMethod);
      mutateUser();
      navigate('/');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="min-h-[360px] w-96">
      <PaymentElement />
      <ButtonComponent color="red" label="送信" />
    </form>
  );
};

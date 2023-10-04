import { FormEvent, useState } from 'react';

import { AddressElement } from '@stripe/react-stripe-js';
import { StripeAddressElementChangeEvent, StripeAddressElementOptions } from '@stripe/stripe-js';
import Stripe from 'stripe';

import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';

type AddressFormComponentProps = {
  shipping?: Stripe.Customer.Shipping;
  onClick: (address: Stripe.Customer.Shipping) => void;
};

export const AddressFormComponent = (props: AddressFormComponentProps) => {
  // export const AddressComponent = () => {
  const { shipping, onClick } = props;
  const [disable, setDisable] = useState<boolean>(true);
  const [address, setAddress] = useState<Stripe.Customer.Shipping>();

  const options: StripeAddressElementOptions = {
    mode: 'shipping',
    allowedCountries: ['JP'],
    defaultValues: {
      address: {
        country: shipping?.address?.country ?? '',
        city: shipping?.address?.city ?? null,
        line1: shipping?.address?.line1 ?? null,
        line2: shipping?.address?.line2 ?? null,
        postal_code: shipping?.address?.postal_code ?? null,
        state: shipping?.address?.state ?? null,
      },
      name: shipping?.name,
    },
    fields: {
      phone: 'never',
    },
    display: {
      name: 'organization',
    },
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!address) return;
    await onClick(address);
  };

  const onChange = (e: StripeAddressElementChangeEvent) => {
    const { value, complete } = e;
    setDisable(!complete);
    if (complete) setAddress(value);
  };

  return (
    <>
      <form className="w-96" onSubmit={onSubmit}>
        <AddressElement options={options} onChange={onChange} />
        <ButtonComponent color="blue" label="送信" disable={disable} />
      </form>
    </>
  );
};

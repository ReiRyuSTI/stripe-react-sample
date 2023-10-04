import Stripe from 'stripe';

type AddressComponentProps = {
  shipping: Stripe.Customer.Shipping;
};

export const AddressComponent = (props: AddressComponentProps) => {
  const { shipping } = props;
  const { name, address } = shipping;
  return (
    <>
      <div className="flex flex-col rounded-md border border-gray-200 p-2 text-sm ">
        <div className="flex items-center justify-center">
          <span className="rounded-md bg-gray-300 py-1 px-4">{name}</span>
        </div>
        <div className="flex flex-col items-center justify-around">
          <span>{address?.postal_code}</span>
          <span>
            {address?.country}/{address?.city}/{address?.line1}/{address?.line2}
          </span>
        </div>
      </div>
    </>
  );
};

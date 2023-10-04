import Stripe from 'stripe';

type CardComponentProps = {
  card: Stripe.PaymentMethod.Card;
};

export const CardComponent = (props: CardComponentProps) => {
  const { card } = props;
  return (
    <>
      <div className="flex flex-col rounded-md border border-gray-200 p-2 text-sm ">
        <div className="flex items-center justify-center">
          <span className="rounded-md bg-gray-300 py-1 px-4">{card.brand}</span>
        </div>
        <div className="flex flex-row justify-around">
          <span>{card.last4}</span>
          <span>
            {card.exp_year}/{card.exp_month}
          </span>
        </div>
      </div>
    </>
  );
};

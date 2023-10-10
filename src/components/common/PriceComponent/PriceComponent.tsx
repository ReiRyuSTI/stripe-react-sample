import { PriceType } from '@/types/products.type';

type PriceComponentProps = {
  price: PriceType;
};

export const PriceComponent = (props: PriceComponentProps) => {
  const { price } = props;
  const { currency, id, unit_amount_decimal } = price;
  return (
    <div className="flex flex-col">
      <span>
        {currency}/{id}
      </span>
      {unit_amount_decimal}
    </div>
  );
};

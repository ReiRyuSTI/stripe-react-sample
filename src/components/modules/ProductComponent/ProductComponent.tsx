import { ButtonComponent } from '@/components/common/ButtonComponent/ButtonComponent';
import { PriceComponent } from '@/components/common/PriceComponent/PriceComponent';
import { ProductType } from '@/types/products.type';

type ProductComponentProps = {
  product: ProductType;
  onClick: (priceID: string) => void;
};

export const ProductComponent = (props: ProductComponentProps) => {
  const { product, onClick } = props;
  const { id, name, price } = product;
  return (
    <div className="flex flex-col">
      <span>
        {id}/{name}
      </span>
      <PriceComponent price={price} />
      <ButtonComponent color="blue" label="check out session" onClick={() => onClick(price.id)} />
    </div>
  );
};

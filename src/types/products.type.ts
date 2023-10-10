export type ProductType = {
  id: string;
  name: string;
  images: string[];
  price: PriceType;
};

export type PriceType = {
  id: string;
  unit_amount: number;
  unit_amount_decimal: string;
  currency: string;
};

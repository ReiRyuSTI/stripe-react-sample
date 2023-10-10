import Stripe from 'stripe';

export type UserType = {
  name: string;
  email: string;
  card?: Stripe.PaymentMethod.Card;
  shipping?: Stripe.Customer.Shipping;
};

export type API_RequestUser = {
  name: string;
  email: string;
  uuid: string;
};

export type API_RequestUpdateUser = {
  shipping: Stripe.Customer.Shipping;
};

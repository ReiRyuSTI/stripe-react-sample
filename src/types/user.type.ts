export type user = {
  name: string;
  email: string;
  card?: {
    brand: string;
    exp_year: string;
    exp_month: string;
    last4: string;
  };
};

export type API_RequestUser = {
  name: string;
  email: string;
  uuid: string;
};

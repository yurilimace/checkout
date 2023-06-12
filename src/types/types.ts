type paymentMethod = {
  value: string;
  component: JSX.Element;
};

type PaymentMethodList = paymentMethod[];

type Offer = {
  id: number;
  storeId: string;
  title: string;
  description: string;
  caption: string;
  fullPrice: number;
  discountAmmount: number;
  discountPercentage: number;
  periodLabel: string;
  period: string;
  discountCouponCode: null;
  order: number;
  priority: number;
  gateway: string;
  splittable: boolean;
  installments: number;
  acceptsCoupon: boolean;
};

type OfferResponse = Offer[];

export type { PaymentMethodList, OfferResponse, Offer };

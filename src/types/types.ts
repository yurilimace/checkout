import { Control, FieldErrors, UseFormRegister } from "react-hook-form";

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

type CheckoutFormFields = {
  couponCode: string | null;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  gateway: string;
  installments: number;
  offerId?: number;
  userId: number;
};

interface CheckoutFormFieldsRegister {
  formRegister: Control<CheckoutFormFields>;
}

export type {
  PaymentMethodList,
  OfferResponse,
  Offer,
  CheckoutFormFields,
  CheckoutFormFieldsRegister,
};

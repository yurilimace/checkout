import { BASE_URL } from "..";
import { CheckoutFormFields, OfferResponse } from "../../types/types";

const GetOffers = async () => {
  const { data } = await BASE_URL.get<OfferResponse>("/offer");
  return data;
};

const CheckoutOffer = async () => {
  const { data } = await BASE_URL.post<CheckoutFormFields>("/subscription");
  return data;
};

export { GetOffers, CheckoutOffer };

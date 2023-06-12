import { BASE_URL } from "..";
import { OfferResponse } from "../../types/types";

const GetOffers = async () => {
  const { data } = await BASE_URL.get<OfferResponse>("/offer");
  return data;
};

export { GetOffers };

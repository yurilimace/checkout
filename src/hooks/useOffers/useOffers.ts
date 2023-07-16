import { useMutation, useQuery } from "react-query";
import { CheckoutOffer, GetOffers } from "../../service/Offer/offerServices";
import { CheckoutFormFields } from "../../types/types";
import { useNavigate } from "react-router-dom";

const useOffers = () => {
  const { data, isLoading, isError, refetch } = useQuery("getOffers", () =>
    GetOffers()
  );

  const mutation = useMutation<
    CheckoutFormFields,
    unknown,
    CheckoutFormFields,
    unknown
  >(CheckoutOffer);

  return { data, isLoading, isError, refetch, mutation };
};

export { useOffers };

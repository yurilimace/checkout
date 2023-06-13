import { useMutation, useQuery } from "react-query";
import { CheckoutOffer, GetOffers } from "../../service/Offer/offerServices";
import { CheckoutFormFields } from "../../types/types";

const useOffers = () => {
  const { data, isLoading, isError, refetch } = useQuery("getOffers", () =>
    GetOffers()
  );

  const mutation = useMutation<
    CheckoutFormFields,
    unknown,
    CheckoutFormFields,
    unknown
  >(CheckoutOffer, {
    onSuccess: (data) => {
      console.log(data, "onSuccessData");
    },
  });

  return { data, isLoading, isError, refetch, mutation };
};

export { useOffers };

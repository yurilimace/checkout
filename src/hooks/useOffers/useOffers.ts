import { useQuery } from "react-query";
import { GetOffers } from "../../service/Offer/offerServices";

const useOffers = () => {
  const { data, isLoading, isError, refetch } = useQuery("getOffers", () =>
    GetOffers()
  );

  return { data, isLoading, isError, refetch };
};

export { useOffers };

import React from "react";
import { OfferResponse } from "../../types/types";

interface OfferContextComponentProps {
  data: OfferResponse;
  children: React.ReactNode;
}

const OffersContext = React.createContext<OfferResponse | null>(null);

const OffersContextComponent = ({
  data,
  children,
}: OfferContextComponentProps) => {
  return (
    <OffersContext.Provider value={data}>{children}</OffersContext.Provider>
  );
};

export { OffersContext, OffersContextComponent };

import React, { useState } from "react";
import { Offer, OfferResponse } from "../../types/types";

type OfferContextType = {
  data: OfferResponse;
  setSelectedPlan: (offer: Offer) => void;
  selectedPlan: Offer | null;
};

interface OfferContextComponentProps {
  data: OfferResponse;
  children: React.ReactNode;
}

const OffersContext = React.createContext<OfferContextType | null>(null);

const OffersContextComponent = ({
  data,
  children,
}: OfferContextComponentProps) => {
  const [selectedPlan, setSelectedPlan] = useState<Offer | null>(null);

  const contextActualValue = { data, setSelectedPlan, selectedPlan };

  return (
    <OffersContext.Provider value={contextActualValue}>
      {children}
    </OffersContext.Provider>
  );
};

export { OffersContext, OffersContextComponent };

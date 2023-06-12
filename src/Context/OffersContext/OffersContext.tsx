import React, { useState } from "react";
import { Offer, OfferResponse } from "../../types/types";

type OfferContextType = {
  data: OfferResponse;
  setSelectedPlan: (offer: Offer) => void;
  selectedPlan: Offer | null;
  creditCardNumber: string;
  setCreditCardNumber: (value: string) => void;
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
  const [creditCardNumber, setCreditCardNumber] = useState("");

  const contextActualValue = {
    data,
    setSelectedPlan,
    selectedPlan,
    creditCardNumber,
    setCreditCardNumber,
  };

  return (
    <OffersContext.Provider value={contextActualValue}>
      {children}
    </OffersContext.Provider>
  );
};

export { OffersContext, OffersContextComponent };

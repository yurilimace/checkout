import { OffersContext } from "../../Context/OffersContext/OffersContext";
import { Offer } from "../../types/types";
import { PaymentPlanInfo } from "../PaymentPlanInfo/PaymentPlanInfo";
import { CardContainer } from "./Card.styled";
import { useContext } from "react";

interface CardProps {
  offer: Offer;
}

const Card = ({ offer }: CardProps) => {
  const contextValue = useContext(OffersContext);
  return (
    <CardContainer>
      <PaymentPlanInfo offer={offer} />
      <input
        type="radio"
        value={offer.id}
        checked={contextValue?.selectedPlan?.id === offer.id}
        onChange={() => contextValue?.setSelectedPlan(offer)}
      />
    </CardContainer>
  );
};

export { Card };

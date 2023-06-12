import { Offer } from "../../types/types";
import { PaymentPlanInfo } from "../PaymentPlanInfo/PaymentPlanInfo";
import { CardContainer } from "./Card.styled";

interface CardProps {
  offer: Offer;
}

const Card = ({ offer }: CardProps) => {
  return (
    <CardContainer>
      <PaymentPlanInfo offer={offer} />
      <input type="radio" />
    </CardContainer>
  );
};

export { Card };

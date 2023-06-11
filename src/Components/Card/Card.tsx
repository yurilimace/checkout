import { PaymentPlanInfo } from "../PaymentPlanInfo/PaymentPlanInfo";
import { CardContainer } from "./Card.styled";

const Card = () => {
  return (
    <CardContainer>
      <PaymentPlanInfo />
      <input type="radio" />
    </CardContainer>
  );
};

export { Card };

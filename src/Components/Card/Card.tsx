import { OffersContext } from "../../Context/OffersContext/OffersContext";
import { Offer } from "../../types/types";
import { PaymentPlanInfo } from "../PaymentPlanInfo/PaymentPlanInfo";
import { BoxShadowCard, CardContainer } from "./Card.styled";
import { useContext } from "react";

interface CardProps {
  children: React.ReactNode;
  type: "BoxShadow" | "Regular";
}

const Card = ({ children, type }: CardProps) => {
  return (
    <>
      {type === "Regular" && <CardContainer> {children} </CardContainer>}
      {type === "BoxShadow" && <BoxShadowCard> {children} </BoxShadowCard>}
    </>
  );
};

export { Card };

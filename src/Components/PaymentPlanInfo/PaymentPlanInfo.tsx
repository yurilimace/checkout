import { theme } from "../../Context/ThemeContext/theme";
import { Offer } from "../../types/types";
import { FormatCurrency } from "../../utils/FormatCurrency";
import { Bullet } from "../Bullet/Bullet";
import { Typography } from "../Typography/Typography";
import { PaymentPlanContainer, PlanInfoSection } from "./PaymentPlan.styled";

interface PaymentPlanInfoProps {
  offer: Offer;
}

const PaymentPlanInfo = ({ offer }: PaymentPlanInfoProps) => {
  const offerDiscountPrice = offer.fullPrice - offer.discountAmmount;
  const offerDiscountinstallmentsPrice =
    offerDiscountPrice / offer.installments;

  return (
    <PaymentPlanContainer>
      <Typography
        textValue={offer.title + " | " + offer.description}
        type="PlanInfoTitle"
        themeColor={theme.bgColor.primary}
        bold
      />
      <PlanInfoSection>
        <Typography
          textValue={
            "De " +
            FormatCurrency(offer.fullPrice) +
            " | " +
            "Por " +
            FormatCurrency(offerDiscountPrice)
          }
          type="Bullet"
          themeColor={theme.bgColor.primary}
        />
        <Bullet
          themeColor={theme.bgColor.secondary}
          textValue={offer.discountPercentage * 100 + "%"}
        />
      </PlanInfoSection>
      <Typography
        textValue={
          offer.installments +
          "x de " +
          FormatCurrency(offerDiscountinstallmentsPrice) +
          "/mês"
        }
        type="Bullet"
        themeColor={theme.bgColor.secondary}
      />
    </PaymentPlanContainer>
  );
};

export { PaymentPlanInfo };

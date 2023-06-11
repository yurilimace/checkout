import { theme } from "../../Context/ThemeContext/theme";
import { Bullet } from "../Bullet/Bullet";
import { Typography } from "../Typography/Typography";
import { PaymentPlanContainer, PlanInfoSection } from "./PaymentPlan.styled";

const PaymentPlanInfo = () => {
  return (
    <PaymentPlanContainer>
      <Typography
        textValue="Anual  |  À Vista"
        type="PlanInfoTitle"
        themeColor={theme.bgColor.primary}
        bold
      />
      <PlanInfoSection>
        <Typography
          textValue="De R$ 514,80  |  Por R$ 436,90"
          type="Bullet"
          themeColor={theme.bgColor.primary}
        />
        <Bullet themeColor={theme.bgColor.secondary} textValue="15%" />
      </PlanInfoSection>
      <Typography
        textValue="10x de R$ 43,69/mês"
        type="Bullet"
        themeColor={theme.bgColor.secondary}
      />
    </PaymentPlanContainer>
  );
};

export { PaymentPlanInfo };

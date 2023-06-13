import { theme } from "../../Context/ThemeContext/theme";
import { IconStar } from "../../assets/icons/IconStart";
import { IconSuccess } from "../../assets/icons/IconSuccess";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { Typography } from "../Typography/Typography";
import {
  CheckoutPlanInfo,
  CheckoutPlanResumeContainer,
  CheckoutUserInfo,
  CheckoutUserInfoContainer,
  InfoCheckoutMessageContainer,
  Spacing,
} from "./InfoCheckoutMessage.styled";

const InfoCheckoutMessage = () => {
  return (
    <InfoCheckoutMessageContainer>
      <IconSuccess />
      <Typography type="Title" textValue="Parabéns!" />
      <Typography
        type="Subtitle"
        textValue="Sua assinatura foi realizada com sucesso."
        themeColor="#C9C5D4"
      />
      <Card type="BoxShadow">
        <CheckoutPlanResumeContainer>
          <IconStar />
          <CheckoutPlanInfo>
            <Typography
              type="Subtitle"
              textValue="Anual  |  Parcelado"
              themeColor={theme.bgColor.primary}
            />
            <Typography
              type="PlanInfoTitle"
              textValue="R$ 479,90  |  10x R$ 47,99"
            />
          </CheckoutPlanInfo>
        </CheckoutPlanResumeContainer>
        <CheckoutUserInfoContainer>
          <CheckoutUserInfo>
            <Typography
              type="Subtitle"
              textValue="E-mail"
              themeColor="#C9C5D4"
              fontSize="14px"
            />
            <Typography
              type="Subtitle"
              textValue="fulano@cicrano.com.br"
              themeColor="#151516"
              fontSize="14px"
            />
          </CheckoutUserInfo>
          <CheckoutUserInfo>
            <Typography
              type="Subtitle"
              textValue="CPF"
              themeColor="#C9C5D4"
              fontSize="14px"
            />
            <Typography
              type="Subtitle"
              textValue="000.000.000-00"
              themeColor="#151516"
              fontSize="14px"
            />
          </CheckoutUserInfo>
        </CheckoutUserInfoContainer>
      </Card>
      <Spacing />

      <Button
        type="Neutral"
        text="Gerenciar assinatura"
        onClick={() => console.log("disparou")}
      />
      <Button
        fullWidth
        text="Ir para home"
        onClick={() => console.log("disparou")}
      />

      <Spacing />
    </InfoCheckoutMessageContainer>
  );
};

export { InfoCheckoutMessage };

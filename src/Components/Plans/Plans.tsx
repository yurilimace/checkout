import { useContext, useState } from "react";
import { theme } from "../../Context/ThemeContext/theme";
import { HelpIcon } from "../../assets/icons/Help";
import { Offer, OfferResponse } from "../../types/types";
import { Bullet } from "../Bullet/Bullet";
import { Card } from "../Card/Card";
import { Typography } from "../Typography/Typography";
import { AboutPlanSection, PlansContainer } from "./Plants.styled";
import { OffersContext } from "../../Context/OffersContext/OffersContext";
import { PaymentPlanInfo } from "../PaymentPlanInfo/PaymentPlanInfo";

const Plans = () => {
  const contextValue = useContext(OffersContext);

  return (
    <PlansContainer>
      <Typography type={"Title"} textValue="Confira o seu plano:" />
      <Bullet
        themeColor={theme.bgColor.neutral}
        textValue={"fulano@cicrano.com.br"}
      />
      {contextValue &&
        contextValue.data.map((offer) => (
          <Card type="Regular">
            <PaymentPlanInfo offer={offer} />
            <input
              type="radio"
              value={offer.id}
              checked={contextValue?.selectedPlan?.id === offer.id}
              onChange={() => contextValue?.setSelectedPlan(offer)}
            />
          </Card>
        ))}
      <AboutPlanSection>
        <Typography
          type="Bullet"
          themeColor={"#151516"}
          textValue={"Sobre a cobrança"}
        />
        <HelpIcon />
      </AboutPlanSection>
    </PlansContainer>
  );
};

export { Plans };

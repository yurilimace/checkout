import { useContext } from "react";
import { theme } from "../../Context/ThemeContext/theme";
import { HelpIcon } from "../../assets/icons/Help";
import { OfferResponse } from "../../types/types";
import { Bullet } from "../Bullet/Bullet";
import { Card } from "../Card/Card";
import { Typography } from "../Typography/Typography";
import { AboutPlanSection, PlansContainer } from "./Plants.styled";
import { OffersContext } from "../../Context/OffersContext/OffersContext";

const Plans = () => {
  const contextValue = useContext(OffersContext);
  const array = [1, 2];

  return (
    <PlansContainer>
      <Typography type={"Title"} textValue="Confira o seu plano:" />
      <Bullet
        themeColor={theme.bgColor.neutral}
        textValue={"fulano@cicrano.com.br"}
      />
      {contextValue && contextValue.map((offer) => <Card offer={offer} />)}
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

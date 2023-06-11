import { theme } from "../../Context/ThemeContext/theme";
import { HelpIcon } from "../../assets/icons/Help";
import { Bullet } from "../Bullet/Bullet";
import { Card } from "../Card/Card";
import { Typography } from "../Typography/Typography";
import { AboutPlanSection, PlansContainer } from "./Plants.styled";

const Plans = () => {
  const array = [1, 2];
  return (
    <PlansContainer>
      <Typography type={"Title"} textValue="Confira o seu plano:" />
      <Bullet
        themeColor={theme.bgColor.neutral}
        textValue={"fulano@cicrano.com.br"}
      />
      {array.map((el) => (
        <Card />
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

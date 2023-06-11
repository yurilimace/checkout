import { Bullet } from "../Bullet/Bullet";
import { Typography } from "../Typography/Typography";
import { PlansContainer } from "./Plants.styled";

const Plans = () => {
  return (
    <PlansContainer>
      <Typography type={"Title"} textValue="Confira o seu plano:" />
      <Bullet textValue={"fulano@cicrano.com.br"} />
    </PlansContainer>
  );
};

export { Plans };

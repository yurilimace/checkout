import { Typography } from "../Typography/Typography";
import { StyledBullet } from "./Bullet.styled";

interface BulletProps {
  textValue: string;
}

const Bullet = ({ textValue }: BulletProps) => {
  return (
    <StyledBullet>
      <Typography textValue={textValue} type="Bullet" />
    </StyledBullet>
  );
};

export { Bullet };

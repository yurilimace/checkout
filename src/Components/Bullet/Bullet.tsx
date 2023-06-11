import { theme } from "../../Context/ThemeContext/theme";
import { Typography } from "../Typography/Typography";
import { StyledBullet } from "./Bullet.styled";

interface BulletProps {
  textValue: string;
  themeColor: string;
}

const Bullet = ({ textValue, themeColor }: BulletProps) => {
  return (
    <StyledBullet themeColor={themeColor}>
      {themeColor === theme.bgColor.secondary && (
        <Typography textValue={textValue} type="Bullet" themeColor="#fff" />
      )}
      {themeColor === theme.bgColor.neutral && (
        <Typography textValue={textValue} type="Bullet" />
      )}
    </StyledBullet>
  );
};

export { Bullet };

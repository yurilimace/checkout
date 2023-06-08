import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import { LogoIcon } from "../../assets/icons/LogoIcon";
import { HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderContainer>
      <ArrowIcon />
      <LogoIcon />
    </HeaderContainer>
  );
};

export { Header };

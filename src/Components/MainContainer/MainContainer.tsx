import { MainContentContainer } from "./MainContainer.styled";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainConteiner = ({ children }: MainContainerProps) => {
  return <MainContentContainer>{children}</MainContentContainer>;
};

export { MainConteiner };

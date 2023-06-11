import { styled } from "styled-components";
import { Bullet } from "../Bullet/Bullet";

const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 81px;
  padding-left: 172px;
  padding-right: 84px;
  & h4 {
    margin-bottom: 6px;
  }

  @media (max-width: 1920px) {
    padding-left: 0px;
    padding-right: 0px;
  }

  @media (max-width: 1024px) {
    padding-top: 81px;
    padding-left: 0px;
    padding-right: 10px;
  }

  @media (max-width: 768px) {
    padding: 81px 16px 0px;
  }

  @media (max-width: 425px) {
    padding: 40px 0px;
  }
`;

const TitleSpacing = styled(Bullet)`
  margin-bottom: 30px;
  border: 1px solid red;
`;

const AboutPlanSection = styled.div`
  width: 34%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  & > svg {
    margin-left: 13px;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export { PlansContainer, TitleSpacing, AboutPlanSection };

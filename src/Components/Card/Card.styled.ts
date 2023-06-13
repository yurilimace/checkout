import { styled } from "styled-components";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
  align-items: center;
  width: 34%;
  border: ${({ theme }) => `1px solid ${theme.bgColor.primary}`};
  border-radius: 15px;
  margin-bottom: 12px;
  & > input[type="radio"] {
    accent-color: ${({ theme }) => theme.bgColor.primary};
  }

  @media (max-width: 1440px) {
    width: 70%;
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

const BoxShadowCard = styled.div`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 15px 16px 24px;
  width: 100%;
  @media (max-width: 1440px) {
    width: 55%;
  }

  @media (max-width: 1024px) {
    width: 55%;
  }

  @media (max-width: 768px) {
    width: 66%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export { CardContainer, BoxShadowCard };

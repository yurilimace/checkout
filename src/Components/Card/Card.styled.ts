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

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export { CardContainer };

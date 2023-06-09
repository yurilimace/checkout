import { styled } from "styled-components";

const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;
  padding-bottom: 3.45rem;
`;

const PaymentMethodSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 3.875rem;

  @media (max-width: 768px) {
    padding-left: 2.875rem;
  }

  @media (max-width: 425px) {
    padding-left: 1.5rem;
  }

  & > svg {
    padding-right: 0.813rem;
  }
`;

const SpoonserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 7.12rem;
  padding-top: 0.875rem;
  & span {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    padding-left: 6.875rem;
  }

  @media (max-width: 425px) {
    padding-left: 4.5rem;
  }
`;

export { PaymentMethodContainer, PaymentMethodSection, SpoonserSection };

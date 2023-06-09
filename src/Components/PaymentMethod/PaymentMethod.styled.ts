import { styled } from "styled-components";

const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;
  padding-bottom: 3.45rem;
`;

const PaymentMethodSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 2.98rem;
  width: 215px;
  height: 37px;
  z-index: 1;

  @media (max-width: 768px) {
    padding-left: 2.875rem;
  }

  @media (max-width: 425px) {
    padding-left: 1.5rem;
  }

  & > svg {
    padding-right: 0.813rem;
    z-index: 1;
  }
`;

const OverlayContent = styled.div<{ index: number }>`
  position: absolute;
  width: 31px;
  height: 22px;
  left: ${({ index }) => `calc(46px * ${index + 1} - 2.5px * ${index} )`};

  background-color: rgba(200, 200, 200, 0.6);
  z-index: 2;
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

export {
  PaymentMethodContainer,
  PaymentMethodSection,
  SpoonserSection,
  OverlayContent,
};

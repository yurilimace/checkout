import { styled } from "styled-components";

const InfoCheckoutMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 72px;
  width: 370px;
  text-align: center;

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
    width: 200px;
  }
`;

const CheckoutPlanResumeContainer = styled.div`
  display: grid;
  background-color: #f4f3f6;
  grid-template-columns: 0.2fr 0.8fr;
  gap: 68px;
  align-items: center;

  border-radius: 15px;
  & > svg {
    padding: 20px 0px 20px 20px;
  }

  /* @media (max-width: 1440px) {
    width: 70%;
  }

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
  } */

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    & > svg {
      padding: 20px 0px 20px 0px;
    }
    gap: 0px;
  }
`;

const CheckoutPlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 37px;
  padding-bottom: 18px;
  text-align: end;

  & :first-child {
    margin-top: 1rem;
    margin-block-end: 0.5rem;
  }

  @media (max-width: 425px) {
    text-align: center;
    padding-right: 0px;
  }
`;

const CheckoutUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 19px 37px 24px 36px;
  > div:last-child span {
    margin-block-end: 0px;
  }
`;

const CheckoutUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: end;
  @media (max-width: 425px) {
    flex-direction: column;
    @media (max-width: 425px) {
      > :first-child {
        margin-block-end: 0px;
      }
    }
  }
`;

const Spacing = styled.div`
  margin-bottom: 24px;
`;

export {
  InfoCheckoutMessageContainer,
  CheckoutPlanResumeContainer,
  CheckoutPlanInfo,
  CheckoutUserInfoContainer,
  CheckoutUserInfo,
  Spacing,
};

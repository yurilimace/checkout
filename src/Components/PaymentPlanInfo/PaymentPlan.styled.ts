import { styled } from "styled-components";

const PaymentPlanContainer = styled.div`
  display: flex;
  padding: 20px 0px 20px 20px;
  flex-direction: column;
  /* grid-template-columns: 1fr 0.1fr;
  justify-items: end; */
`;

const PlanInfoSection = styled.div`
  display: flex;
  align-items: baseline;
  text-align: center;
  & > span {
    margin-right: 12px;
  }

  @media (max-width: 768px) {
    align-items: center;
  }

  @media (max-width: 425px) {
    align-items: center;
  }
`;

export { PaymentPlanContainer, PlanInfoSection };

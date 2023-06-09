import { styled } from "styled-components";

const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 81px;
  padding-left: 172px;
  padding-right: 84px;
  /* width: 330px;
  height: 50px; */

  @media (max-width: 768px) {
    padding: 81px 16px 0px;
  }
  @media (max-width: 425px) {
    padding: 81px 0px;
  }
`;

export { CheckoutFormContainer };

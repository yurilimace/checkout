import { styled } from "styled-components";

const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 84px;
  padding-top: 72px;

  @media (max-width: 425px) {
    padding: 72px 0px;
  }
`;

export { PlansContainer };

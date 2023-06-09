import { styled } from "styled-components";

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  padding-left: 64px;
  padding-top: 31px;
  align-items: center;

  @media (max-width: 425px) {
    padding-left: 32px;
    grid-template-columns: 0.7fr 1fr;
  }
`;

export { HeaderContainer };

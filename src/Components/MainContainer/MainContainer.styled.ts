import { styled } from "styled-components";

const MainContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 68px;

  @media (max-width: 768px) {
    padding-left: 34px;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding-left: 0px;
  }
`;

export { MainContentContainer };

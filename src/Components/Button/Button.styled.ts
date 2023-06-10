import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.bgColor.primary};
  width: 60%;
  color: #fff;
  border-radius: 25px;
  height: 50px;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export { StyledButton };

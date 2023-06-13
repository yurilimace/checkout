import { styled } from "styled-components";

const StyledButton = styled.button<{ fullWidth: boolean }>`
  background-color: ${({ theme }) => theme.bgColor.primary};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "60%")};
  color: #fff;
  border-radius: 25px;
  height: 50px;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

const NeutralButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.bgColor.neutral};
  border: none;
  color: ${({ theme }) => theme.bgColor.primary};
`;

export { StyledButton, NeutralButton };

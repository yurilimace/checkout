import { css, styled } from "styled-components";

import icon from "../../assets/icons/circle-exclamation-solid.svg";

const StyledInput = styled.input<{ fieldError: boolean }>`
  background-color: #fff;

  width: 90%;
  margin-bottom: 8px;
  padding: 4px 0px 0px 0px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ebebeb;
  transition: border-color 0.3s ease-in-out;
  color: #b0b0b0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b0b0b0;
    font-size: 16px;
    line-height: 20.83px;
    font-weight: 400;
  }

  ${({ fieldError }) =>
    fieldError &&
    css`
      border-bottom: 1px solid red;
      background-image: url(${icon});
      background-position: right 10px center;
      background-repeat: no-repeat;
      background-size: 20px 20px;
    `}

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export { StyledInput };

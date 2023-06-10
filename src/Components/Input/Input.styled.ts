import { css, styled } from "styled-components";

import icon from "../../assets/icons/circle-exclamation-solid.svg";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

const StyledInput = styled.input<{ fielderror: boolean }>`
  background-color: #fff;

  width: 60%;
  margin-bottom: 8px;
  padding: 4px 0px 10px 0px;
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

  ${({ fielderror }) =>
    fielderror &&
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

const InputContainerColumn = styled(InputContainer)`
  width: 40%;
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 425px) {
    width: 30%;
  }
`;

const CardDateValidationInput = styled(StyledInput)`
  width: 100%;
`;

export {
  StyledInput,
  CardDateValidationInput,
  InputContainer,
  InputContainerColumn,
};

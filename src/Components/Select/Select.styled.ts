import { styled } from "styled-components";

const StyledSelect = styled.select`
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
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export { StyledSelect };

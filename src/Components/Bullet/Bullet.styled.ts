import { styled } from "styled-components";

const StyledBullet = styled.div`
  width: fit-content;
  padding: 4px 12px;
  background-color: ${({ theme }) => theme.bgColor.neutral};
  border-radius: 25px;
  border: 1px solid #ebebeb;
  font-size: 12px;
`;

export { StyledBullet };

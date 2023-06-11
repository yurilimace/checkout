import { css, styled } from "styled-components";
import { theme } from "../../Context/ThemeContext/theme";

const StyledBullet = styled.div<{ themeColor?: string }>`
  width: fit-content;
  padding: 4px 12px;
  background-color: ${({ themeColor }) => themeColor};
  border-radius: 25px;
  border: 1px solid #ebebeb;
  font-size: 12px;
  margin-bottom: 30px;

  ${({ themeColor }) =>
    themeColor === theme.bgColor.secondary &&
    css`
      width: 40px;
      height: 16px;
      padding: 0px;
      text-align: center;
      border-radius: 9px;
      margin-bottom: 0px;
    `}
`;

export { StyledBullet };

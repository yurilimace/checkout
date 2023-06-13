import styled from "styled-components";

const Spacing = styled.div<{ spacingSize: string }>`
  margin-bottom: ${({ spacingSize }) => spacingSize};
`;

export { Spacing };

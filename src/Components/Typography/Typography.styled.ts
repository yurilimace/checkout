import { styled } from "styled-components";

const Title = styled.h4`
  font-weight: 400;
  line-height: 26px;
  font-size: 20px;
  margin-block-end: 0.563rem;
`;

const SubTitle = styled.span`
  font-weight: 400;
  line-height: 21px;
  font-size: 16px;
  margin-block-end: 1.875rem;
`;

const PaymentSpoonserText = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #ddd;
`;

const InputLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  line-height: 15.62px;
  color: #727272;
`;

const ErrorLabel = styled(InputLabel)`
  color: red;
`;

const BulletText = styled.span<{ themeColor?: string; bold?: boolean }>`
  font-size: 12px;
  font-weight: ${({ bold }) => (bold ? "700" : "400")};
  color: ${({ themeColor }) => (themeColor ? themeColor : "#151516")};
  font-style: normal;
  line-height: 16px;
`;

const PlanInfoTitle = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.bgColor.primary};
`;

export {
  Title,
  SubTitle,
  PaymentSpoonserText,
  InputLabel,
  BulletText,
  PlanInfoTitle,
  ErrorLabel,
};

import {
  BulletText,
  InputLabel,
  PaymentSpoonserText,
  PlanInfoTitle,
  SubTitle,
  Title,
} from "./Typography.styled";

interface TypographyProps {
  type:
    | "Title"
    | "Subtitle"
    | "Spoonser"
    | "InputLabel"
    | "Bullet"
    | "PlanInfoTitle";
  bold?: boolean;
  themeColor?: string;
  textValue: string;
}

const Typography = ({
  type = "Subtitle",
  textValue,
  themeColor,
  bold,
}: TypographyProps) => {
  switch (type) {
    case "Title": {
      return <Title> {textValue} </Title>;
    }

    case "Spoonser": {
      return <PaymentSpoonserText> {textValue} </PaymentSpoonserText>;
    }

    case "InputLabel": {
      return <InputLabel> {textValue} </InputLabel>;
    }

    case "Bullet": {
      return (
        <BulletText themeColor={themeColor} bold={bold}>
          {textValue}
        </BulletText>
      );
    }

    case "PlanInfoTitle": {
      return <PlanInfoTitle>{textValue}</PlanInfoTitle>;
    }

    default: {
      return <SubTitle> {textValue} </SubTitle>;
    }
  }
};

export { Typography };

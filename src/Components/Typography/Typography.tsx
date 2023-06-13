import {
  BulletText,
  ErrorLabel,
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
    | "PlanInfoTitle"
    | "ErrorLabel";
  bold?: boolean;
  themeColor?: string;
  fontSize?: string;
  textValue: string;
}

const Typography = ({
  type = "Subtitle",
  textValue,
  themeColor,
  bold,
  fontSize,
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

    case "ErrorLabel": {
      return <ErrorLabel> {textValue} </ErrorLabel>;
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
      return (
        <SubTitle themeColor={themeColor} fontSize={fontSize}>
          {" "}
          {textValue}{" "}
        </SubTitle>
      );
    }
  }
};

export { Typography };

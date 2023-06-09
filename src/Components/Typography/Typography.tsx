import { PaymentSpoonserText, SubTitle, Title } from "./Typography.styled";

interface TypographyProps {
  type: "Title" | "Subtitle" | "Spoonser";
  textValue: string;
}

const Typography = ({ type = "Subtitle", textValue }: TypographyProps) => {
  switch (type) {
    case "Title": {
      return <Title> {textValue} </Title>;
    }

    case "Spoonser": {
      return <PaymentSpoonserText> {textValue} </PaymentSpoonserText>;
    }

    default: {
      return <SubTitle> {textValue} </SubTitle>;
    }
  }
};

export { Typography };

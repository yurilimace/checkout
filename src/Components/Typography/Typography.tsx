import {
  InputLabel,
  PaymentSpoonserText,
  SubTitle,
  Title,
} from "./Typography.styled";

interface TypographyProps {
  type: "Title" | "Subtitle" | "Spoonser" | "InputLabel";
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

    case "InputLabel": {
      return <InputLabel> {textValue} </InputLabel>;
    }

    default: {
      return <SubTitle> {textValue} </SubTitle>;
    }
  }
};

export { Typography };

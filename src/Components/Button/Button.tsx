import { StyledButton } from "./Button.styled";

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>Finalizar pagamento</StyledButton>;
};

export { Button };

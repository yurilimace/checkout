import { NeutralButton, StyledButton } from "./Button.styled";

interface ButtonProps {
  onClick: () => void;
  text: string;
  type?: "Regular" | "Neutral";
  fullWidth?: boolean;
}

const Button = ({
  onClick,
  text,
  type = "Regular",
  fullWidth = false,
}: ButtonProps) => {
  return (
    <>
      {type === "Regular" && (
        <StyledButton fullWidth={fullWidth} onClick={onClick}>
          {text}
        </StyledButton>
      )}
      {type === "Neutral" && (
        <NeutralButton fullWidth={fullWidth} onClick={onClick}>
          {text}{" "}
        </NeutralButton>
      )}
    </>
  );
};

export { Button };

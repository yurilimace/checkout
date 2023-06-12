import { Controller, get, useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { PaymentMethod } from "../PaymentMethod/PaymentMethod";
import { Select } from "../Select/Select";
import { Typography } from "../Typography/Typography";
import { CheckoutFormContainer, CheckoutFormLine } from "./CheckoutForm.styled";
import { CheckoutFormFields } from "../../types/types";

const CheckoutForm = () => {
  const {
    control,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormFields>();
  const onSubmit = (data: any) => console.log(data, "disparou");

  return (
    <CheckoutFormContainer>
      <Typography type={"Title"} textValue="Estamos quase lá!" />
      <Typography
        type={"Subtitle"}
        textValue="Insira seus dados de pagamento abaixo:"
      />
      <PaymentMethod />

      <Input type="Cardnumber" formRegister={control} />
      <CheckoutFormLine>
        <Input formRegister={control} type="CardValidationDate" />
        <Input formRegister={control} type="Cardsecuritycode" />
      </CheckoutFormLine>
      <Input
        type="Custom"
        labelText="Nome impresso no cartão"
        customPlaceholder="Seu nome"
        formRegister={control}
      />
      <Input type="CPF" labelText="CPF" formRegister={control} />
      <Input
        type="Custom"
        labelText="Cupom"
        customPlaceholder="Insira aqui"
        formRegister={control}
      />
      <Select formRegister={control} />
      <Button onClick={handleSubmit(onSubmit)} />
    </CheckoutFormContainer>
  );
};

export { CheckoutForm };

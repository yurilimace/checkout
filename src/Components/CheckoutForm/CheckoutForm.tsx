import { Controller, get, useForm } from "react-hook-form";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { PaymentMethod } from "../PaymentMethod/PaymentMethod";
import { Select } from "../Select/Select";
import { Typography } from "../Typography/Typography";
import { CheckoutFormContainer, CheckoutFormLine } from "./CheckoutForm.styled";
import { CheckoutFormFields } from "../../types/types";
import { UseMutationResult } from "react-query";
import { OffersContext } from "../../Context/OffersContext/OffersContext";
import { useContext } from "react";

interface CheckoutFromProps {
  mutation: UseMutationResult<
    CheckoutFormFields,
    unknown,
    CheckoutFormFields,
    unknown
  >;
}

const CheckoutForm = ({ mutation }: CheckoutFromProps) => {
  const context = useContext(OffersContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormFields>();
  const onSubmit = (data: CheckoutFormFields) => {
    data.couponCode = null;
    data.gateway = "iugu";
    data.offerId = context?.selectedPlan?.id;
    data.userId = 1;
    mutation.mutate(data);
  };

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

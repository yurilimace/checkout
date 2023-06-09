import { AmericanIcon } from "../assets/icons/AmericanIcon";
import { DinnersIcon } from "../assets/icons/DinnersIcon";
import { EloIcon } from "../assets/icons/EloIcon";
import { MastercardIcon } from "../assets/icons/Mastercard";
import { VisaIcon } from "../assets/icons/VisaIcon";
import { PaymentMethodList } from "../types/types";

const PaymentMethodConstants: PaymentMethodList = [
  {
    value: "Mastercard",
    component: <MastercardIcon />,
  },
  {
    value: "Dinners",
    component: <DinnersIcon />,
  },
  {
    value: "American",
    component: <AmericanIcon />,
  },
  {
    value: "Visa",
    component: <VisaIcon />,
  },
  {
    value: "Elo",
    component: <EloIcon />,
  },
];

export { PaymentMethodConstants };

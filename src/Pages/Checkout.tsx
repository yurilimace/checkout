import { CheckoutForm } from "../Components/CheckoutForm/CheckoutForm";
import { Header } from "../Components/Header/Header";
import { MainConteiner } from "../Components/MainContainer/MainContainer";
import { Plans } from "../Components/Plans/Plans";
import { OffersContextComponent } from "../Context/OffersContext/OffersContext";
import { useOffers } from "../hooks/useOffers/useOffers";

const Checkout = () => {
  const { data, isLoading, mutation } = useOffers();

  return (
    <>
      <Header />

      <MainConteiner>
        {isLoading && <h1> Carregando </h1>}
        {data && (
          <OffersContextComponent data={data}>
            <CheckoutForm mutation={mutation} />
            <Plans />
          </OffersContextComponent>
        )}
      </MainConteiner>
    </>
  );
};
export { Checkout };

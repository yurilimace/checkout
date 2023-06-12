import { useState } from "react";

import { Header } from "./Components/Header/Header";
import { MainConteiner } from "./Components/MainContainer/MainContainer";
import { CheckoutForm } from "./Components/CheckoutForm/CheckoutForm";
import { Plans } from "./Components/Plans/Plans";
import { useOffers } from "./hooks/useOffers/useOffers";
import { OffersContextComponent } from "./Context/OffersContext/OffersContext";

function App() {
  const [count, setCount] = useState(0);
  const { data, isLoading } = useOffers();

  return (
    <>
      <Header />
      <MainConteiner>
        {isLoading && <h1> Carregando </h1>}
        {data && (
          <OffersContextComponent data={data}>
            <CheckoutForm />
            <Plans />
          </OffersContextComponent>
        )}
      </MainConteiner>
    </>
  );
}

export default App;

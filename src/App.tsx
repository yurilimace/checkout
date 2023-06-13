import { useState } from "react";

import { Header } from "./Components/Header/Header";
import { MainConteiner } from "./Components/MainContainer/MainContainer";
import { CheckoutForm } from "./Components/CheckoutForm/CheckoutForm";
import { Plans } from "./Components/Plans/Plans";
import { useOffers } from "./hooks/useOffers/useOffers";
import { OffersContextComponent } from "./Context/OffersContext/OffersContext";
import { MainContentContainerFlex } from "./Components/MainContainer/MainContainer.styled";
import { InfoCheckoutMessage } from "./Components/InfoCheckoutMessage/InfoCheckoutMessage";

function App() {
  const [count, setCount] = useState(0);
  // const { data, isLoading, mutation } = useOffers();

  return (
    <>
      <Header />
      <MainContentContainerFlex>
        <InfoCheckoutMessage />
      </MainContentContainerFlex>
      {/* <MainConteiner>
        {isLoading && <h1> Carregando </h1>}
        {data && (
          <OffersContextComponent data={data}>
            <CheckoutForm mutation={mutation} />
            <Plans />
          </OffersContextComponent>
        )}
      </MainConteiner> */}
    </>
  );
}

export default App;

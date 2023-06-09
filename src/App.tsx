import { useState } from "react";

import { Header } from "./Components/Header/Header";
import { MainConteiner } from "./Components/MainContainer/MainContainer";
import { CheckoutForm } from "./Components/CheckoutForm/CheckoutForm";
import { Plans } from "./Components/Plans/Plans";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainConteiner>
        <CheckoutForm />
        <Plans />
      </MainConteiner>
    </>
  );
}

export default App;

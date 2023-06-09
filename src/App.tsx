import { useState } from "react";

import "./App.css";

import { Header } from "./Components/Header/Header";
import { MainConteiner } from "./Components/MainContainer/MainContainer";
import { CheckoutForm } from "./Components/CheckoutForm/CheckoutForm";
import { Plans } from "./Components/Plans/Plans";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <MainConteiner>
          <CheckoutForm />
          <Plans />
        </MainConteiner>
      </div>
    </>
  );
}

export default App;

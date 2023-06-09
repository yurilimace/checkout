import { useState } from "react";

import "./App.css";

import { Header } from "./Components/Header/Header";
import { MainConteiner } from "./Components/MainContainer/MainContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <MainConteiner>
          <div> form </div>
          <div> options </div>
        </MainConteiner>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import { ThemeProvider } from "styled-components";
import { Header } from "./Components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <div>Content</div>
      </div>
    </>
  );
}

export default App;

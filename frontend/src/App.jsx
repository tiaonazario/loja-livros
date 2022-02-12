import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  /* Resetar css */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: sans-serif;
    background-color: #FFFFFF;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;

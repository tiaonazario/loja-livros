import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600&display=swap');
  /* Resetar css */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    font-family: 'Dosis', sans-serif;
  }
  
  body {
    font-family: sans-serif;
    background-color: #FFFFFF;
  }

  img {
    user-select: none;
    pointer-events: none;
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: black;
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

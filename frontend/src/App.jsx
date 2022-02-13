import { createGlobalStyle } from "styled-components";
import Palette from "./libs/Palette";
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
    background-color: ${Palette.bg};
    font-family: sans-serif;
  }

  img {
    user-select: none;
    pointer-events: none;
    max-width: 100%;
    height: auto;
    display: block;
  }

  a {
    color: ${Palette.dimmed};
  }
  a:hover {
    color: ${Palette.highlight};
    transform: scale(1.2)
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

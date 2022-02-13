import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Info from "./Info";

const GlobalStyle = createGlobalStyle`
  h2 {
    font-size: 14px;
  }
  h3 {
    font-size: 12px;
  }
`;

function Home() {
  return (
    <>
      <GlobalStyle />

      <Header />
      <Info />

      <main></main>

      <footer></footer>
    </>
  );
}

export default Home;

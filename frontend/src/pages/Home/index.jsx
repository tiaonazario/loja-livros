import React from "react";
import { createGlobalStyle } from "styled-components";
import BtnImg from "../../components/BtnImg";
import {
  IconMyOrder,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from "../../libs/IconSVG/Others";
import {
  IconFacebook,
  IconInstagram,
  IconTwiter,
} from "../../libs/IconSVG/SocialNetwork";

const GlobalStyle = createGlobalStyle`
  h2 {
    font-size: 14px;
  }
  h3 {
    font-size: 12px;
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background: #d9e6f6;
    height: 100px;
  }
  .header section {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .social-networks {
    display: flex;
  }
  .social-networks a {
    padding: 10px;
  }
  .top-menu {
    display: flex;
    align-items: center;
  }
  .top-menu a {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .top-menu a h2 {
    padding-left: 5px;
  }
  .search {
    display: flex;
    border: 1px solid black;
    align-items: center;
    background-color: #fff;
  }
  .search input {
    border: none;
    height: 25px;
  }
  .search svg {
    padding-right: 5px;
  }
  .shopping-cart {
    display: flex;
    align-items: center;
  }
  .shopping-cart span {
    padding-left: 10px;
    font-size: 30px;
  }
`;

function Home() {
  return (
    <>
      <GlobalStyle />

      <header className="header">
        <section>
          <h2>Bem Vindo, Tião Nazário</h2>

          <div className="social-networks">
            <a href="">
              <IconInstagram size={20} />
            </a>
            <a href="">
              <IconFacebook size={20} />
            </a>
            <a href="">
              <IconTwiter size={20} />
            </a>
          </div>

          <nav className="top-menu">
            <a href="">
              <IconMyOrder size={20} />
              <h2>Meus Pedidos</h2>
            </a>

            <a href="">
              <IconUser size={20} />
              <h2>Minha Conta</h2>
            </a>
          </nav>
        </section>

        <section>
          <div className="search">
            <input type="text" />
            <IconSearch size={20} />
          </div>

          <h2>TN Store</h2>

          <BtnImg
            item={
              <div className="shopping-cart">
                <IconShoppingCart size={40} />
                <span>4</span>
              </div>
            }
            title="Meu Carrinho"
            subtitle="Produtos Adicionados"
          />
        </section>
      </header>

      <main></main>

      <footer></footer>
    </>
  );
}

export default Home;

import React from "react";
import { createGlobalStyle } from "styled-components";
import BtnImg from "../../../components/BtnImg";
import {
  IconMyOrder,
  IconSearch,
  IconShoppingCart,
  IconUser,
} from "../../../libs/IconSVG/Others";
import {
  IconFacebook,
  IconInstagram,
  IconTwiter,
} from "../../../libs/IconSVG/SocialNetwork";

const GlobalStyle = createGlobalStyle`
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background: #d9e6f6;
    height: 120px;
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
  .top-menu a span {
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
    font-size: 25px;
  }
  .logo {
    font-size: 50px;
  }
`;

function Header() {
  return (
    <header className="header">
      <GlobalStyle />
      <section>
        <span>Bem Vindo, Tião Nazário</span>

        <div className="social-networks">
          <a href="">
            <IconInstagram size={18} />
          </a>
          <a href="">
            <IconFacebook size={18} />
          </a>
          <a href="">
            <IconTwiter size={18} />
          </a>
        </div>

        <nav className="top-menu">
          <a href="">
            <IconMyOrder size={18} />
            <span>Meus Pedidos</span>
          </a>

          <a href="">
            <IconUser size={18} />
            <span>Minha Conta</span>
          </a>
        </nav>
      </section>

      <section>
        <div className="search">
          <input type="text" />
          <IconSearch size={18} />
        </div>

        <span className="logo">TN Store</span>

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
  );
}

export default Header;

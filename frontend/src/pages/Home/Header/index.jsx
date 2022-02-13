import React from "react";
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
import styled from "styled-components";
import Palette from "../../../libs/Palette";

const HeaderBox = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background: ${Palette.bg_};
  height: 120px;

  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;
    p {
      color: ${Palette.dimmed};
      a {
        cursor: pointer;
      }
    }
  }

  .social-networks {
    display: flex;
    a {
      padding: 10px;
    }
  }

  .top-menu {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      padding: 0 10px;
    }
    a span {
      padding-left: 5px;
    }
  }

  .search {
    display: flex;
    border: 1px solid ${Palette.dimmed};
    align-items: center;
    background-color: ${Palette.bg};
    input {
      background-color: ${Palette.bg};
      border: none;
      height: 25px;
    }
    svg {
      padding-right: 5px;
    }
    :hover {
      transform: scale(1.2);
      border: 1px solid ${Palette.highlight};
    }
  }

  .BtnImg {
    color: ${Palette.main};
    :hover {
      color: ${Palette.highlight};
    }
  }

  .shopping-cart {
    display: flex;
    align-items: center;
    span {
      padding-left: 10px;
      font-size: 25px;
    }
  }

  .logo {
    font-size: 50px;
    color: ${Palette.main};
  }
`;

function Header() {
  return (
    <HeaderBox className="header">
      <section>
        <p>
          Bem Vindo, <a>Tião Nazário</a>
        </p>

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
          className="BtnImg"
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
    </HeaderBox>
  );
}

export default Header;

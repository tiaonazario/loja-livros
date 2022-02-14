import React from "react";
import styled from "styled-components";
import Palette from "../../../libs/Palette";

const FooterBox = styled.footer`
  background-color: ${Palette.bg_};
  height: 250px;
  padding: 30px 0;
  section {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        margin: 10px 0;
        border-bottom: 1px solid ${Palette.dimmed};
        font-size: 20px;
      }
      nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        a {
          padding: 5px 0;
          font-size: 14px;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <FooterBox>
      <section>
        <div className="category">
          <span>Categorias</span>
          <nav>
            <a href="">Categoria 1</a>
            <a href="">Categoria 2</a>
            <a href="">Categoria 3</a>
            <a href="">Categoria 4</a>
            <a href="">Categoria 5</a>
          </nav>
        </div>

        <div className="contens">
          <span>Conteúdos</span>
          <nav>
            <a href="">Fale Conosco </a>
            <a href="">Sobre</a>
            <a href="">Duvidas Frequentes</a>
            <a href="">Política de Privacidade</a>
          </nav>
        </div>
        <nav className="pay"></nav>
      </section>
    </FooterBox>
  );
}

export default Footer;

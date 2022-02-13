import React from "react";
import { createGlobalStyle } from "styled-components";
import BtnImg from "../../../components/BtnImg";
import {
  IconCreditCard,
  IconDelivery,
  IconEconomy,
} from "../../../libs/IconSVG/Others";

const GlobalStyle = createGlobalStyle`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    height: 60px;
    margin-top: 10px;
  }
`;

function Info() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <BtnImg
          item={<IconDelivery size={50} />}
          title="Frete Grátis"
          subtitle="Acima de R$ 100"
        />

        <BtnImg
          item={<IconEconomy size={40} />}
          title="Economia"
          subtitle="10% off no PIX"
        />

        <BtnImg
          item={<IconCreditCard size={50} />}
          title="3x Sem Juros"
          subtitle="Ou até 12x no Cartão"
        />
      </div>
    </>
  );
}

export default Info;

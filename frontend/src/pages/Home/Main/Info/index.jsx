import React from "react";
import styled from "styled-components";
import BtnImg from "../../../../components/BtnImg";
import {
  IconCreditCard,
  IconDelivery,
  IconEconomy,
} from "../../../../libs/IconSVG/Others";
import Palette from "../../../../libs/Palette";

const InfoBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 700px;
  border-top: 1px solid ${Palette.dimmed};
  border-bottom: 1px solid ${Palette.dimmed};
  height: 60px;
  margin-top: 10px;

  .BtnImg {
    padding: 0 25px;
  }
`;

function Info() {
  return (
    <>
      <InfoBox>
        <BtnImg
          className="BtnImg"
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
      </InfoBox>
    </>
  );
}

export default Info;

import React from "react";
import styled from "styled-components";
import Palette from "../../libs/Palette";

const Box = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid ${Palette.border};
  width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  :hover {
    transform: scale(1.05);
    border: 1px solid ${Palette.highlight};
  }

  img {
    height: 250px;
    padding: 15px;
  }
  h2 {
    font-size: 20px;
    padding: 15px;
  }
  .price {
    font-size: 24px;
    padding-bottom: 15px;
    color: ${Palette.highlight};
  }
  p {
    font-size: 14px;
    padding-bottom: 15px;
    .pricePIX {
      font-size: 12px;
      padding-bottom: 15px;
    }
    span {
      font-size: 16px;
      color: ${Palette.highlight};
    }
  }
`;

function NewProduct(props) {
  let price = props.price.toFixed(2);
  let parcel = (props.price / 3).toFixed(2);
  let pricePIX = (props.price * 0.9).toFixed(2);

  function ForReal(price) {
    return `R$ ${price.replace(".", ",")}`;
  }

  return (
    <>
      <Box>
        <img src={props.img} alt={props.title} />
        <h2 className="title">{props.title}</h2>
        <span className="price">{ForReal(price)}</span>
        <p>
          Até 3x de <span>{ForReal(parcel)}</span> sem juros
        </p>
        <p className="pricePIX">
          ou <span>{ForReal(pricePIX)}</span> via PIX
        </p>
      </Box>
    </>
  );
}

export default NewProduct;

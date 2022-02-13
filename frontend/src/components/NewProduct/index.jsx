import React from "react";
import styled from "styled-components";

const Box = styled.div`
  border-radius: 10px;
  border: 1px solid #d9e6f6;
  width: 250px;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  img {
    height: 250px;
    padding: 15px;
  }
  h2 {
    font-size: 20px;
    padding: 10px;
    height: 100px;
  }
  .price {
    font-size: 24px;
    padding-bottom: 15px;
  }
  span {
    font-size: 14px;
    padding-bottom: 15px;
  }
  .pricePIX {
    font-size: 12px;
    padding-bottom: 15px;
  }
`;

function NewProduct(props) {
  let parcel = props.price / 3;
  let pricePIX = props.price * 0.9;

  return (
    <>
      <Box>
        <img src={props.img} alt={props.title} />
        <h2 className="title">{props.title}</h2>
        <span className="price">R$ {props.price}</span>
        <span>Até 3x de R$ {parcel.toFixed(2)} sem juros</span>
        <span className="pricePIX">ou R$ {pricePIX.toFixed(2)} via PIX</span>
      </Box>
    </>
  );
}

export default NewProduct;

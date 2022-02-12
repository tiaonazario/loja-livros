import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .BtnImg {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  .text {
    padding-left: 10px;
    flex-direction: column;
  }
`;

function BtnImg(props) {
  return (
    <>
      <GlobalStyle />
      <a className="BtnImg">
        {props.item}

        <div className="text">
          <h2 className="title">{props.title}</h2>
          <h3 className="subtitle">{props.subtitle}</h3>
        </div>
      </a>
    </>
  );
}

export default BtnImg;

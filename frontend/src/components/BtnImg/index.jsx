import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .BtnImg {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 10px;
    .title {
      font-size: 20px;
    }
    .subtitle {
      font-size: 14px;
    }
    .text {
      padding-left: 10px;
      display: flex;
      flex-direction: column;
    }
  }
`;

function BtnImg(props) {
  return (
    <>
      <GlobalStyle />
      <a className="BtnImg">
        {props.item}

        <div className="text">
          <span className="title">{props.title}</span>
          <span className="subtitle">{props.subtitle}</span>
        </div>
      </a>
    </>
  );
}

export default BtnImg;

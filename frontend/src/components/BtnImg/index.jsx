import React from "react";
import styled from "styled-components";

const BtnImgBox = styled.a`
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
`;

function BtnImg(props) {
  return (
    <>
      <BtnImgBox className="BtnImg">
        {props.item}

        <div className="text">
          <span className="title">{props.title}</span>
          <span className="subtitle">{props.subtitle}</span>
        </div>
      </BtnImgBox>
    </>
  );
}

export default BtnImg;

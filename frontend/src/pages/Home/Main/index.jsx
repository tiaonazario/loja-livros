import React from "react";
import styled from "styled-components";
import NewProduct from "../../../components/NewProduct";
import Palette from "../../../libs/Palette";
import Info from "./Info";

const MainBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  .category {
    padding-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    border-bottom: 1px solid ${Palette.main};
    a {
      font-size: 20px;
      padding: 5px 20px;
    }
  }

  .category-name {
    font-size: 20px;
    padding-top: 30px;
    border-bottom: 1px solid ${Palette.main};
  }

  .items {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 30px 0;
  }
`;

function Main() {
  return (
    <>
      <MainBox>
        <Info />

        <nav className="category">
          <a href="">Romance</a>
          <a href="">Educação Financeira</a>
          <a href="">Ficção</a>
          <a href="">Mangá</a>
          <a href="">HQ</a>
        </nav>

        <span className="category-name">Produto em Destaque</span>
        <div className="items">
          <NewProduct
            img="https://images-na.ssl-images-amazon.com/images/I/41TsvI70n9L._SY344_BO1,204,203,200_QL70_ML2_.jpg"
            title="Do Mil ao Milhão"
            price={15.9}
          />
          <NewProduct
            img="https://images-na.ssl-images-amazon.com/images/I/51VKbEh8uSL._SX356_BO1,204,203,200_.jpg"
            title="Pai Rico Pai Pobre"
            price={26.85}
          />
        </div>
      </MainBox>
    </>
  );
}

export default Main;

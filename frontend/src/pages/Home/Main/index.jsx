import React from "react";
import styled from "styled-components";
import NewProduct from "../../../components/NewProduct";

const MainContents = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  padding-top: 30px;
  .category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    border-bottom: 1px solid #d9e6f6;
    a {
      font-size: 20px;
      padding: 5px 20px;
    }
  }

  .category-name {
    font-size: 20px;
    padding-top: 30px;
    border-bottom: 1px solid #d9e6f6;
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
      <MainContents className="main">
        <nav className="category">
          <a href="">Categoria 1</a>
          <a href="">Categoria 2</a>
          <a href="">Categoria 3</a>
          <a href="">Categoria 4</a>
          <a href="">Categoria 5</a>
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
      </MainContents>
    </>
  );
}

export default Main;

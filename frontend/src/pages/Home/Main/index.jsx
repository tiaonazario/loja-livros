import React from "react";
import styled from "styled-components";
import NewProduct from "../../../components/NewProduct";
import Palette from "../../../libs/Palette";
import Info from "./Info";
import { useEffect, useState } from "react";

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
    border-bottom: 1px solid ${Palette.border};
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
          {products.map((product) => (
            <NewProduct
              img={product.cover}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </MainBox>
    </>
  );
}

export default Main;

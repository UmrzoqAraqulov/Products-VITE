import React, { useCallback, useState } from "react";

const UseFeature = (Products) => {
  const [search, setSearch] = useState("");
  const [changeCategory, setChangeCategory] = useState("all");
  const [sortPriceValue, setSortPriceValue] = useState("increase");

  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value.trim().toLowerCase());
    },
    [search]
  );

  let emptyProducts = Products;
  let first, second, emptyProduct;

  if (sortPriceValue === "increase") {
    for (let i = 0; i < emptyProducts.length; i++) {
      first = emptyProducts[i];
      for (let j = 0; j < emptyProducts.length; j++) {
        second = emptyProducts[j];
        if (+first.price < +second.price) {
          emptyProduct = emptyProducts[i];
          emptyProducts[i] = emptyProducts[j];
          emptyProducts[j] = emptyProduct;
        }
      }
    }
  } else {
    for (let i = 0; i < Products.length; i++) {
      first = emptyProducts[i];
      for (let j = 0; j < emptyProducts.length; j++) {
        second = emptyProducts[j];
        if (+first.price > +second.price) {
          emptyProduct = emptyProducts[i];
          emptyProducts[i] = emptyProducts[j];
          emptyProducts[j] = emptyProduct;
        }
      }
    }
  }

  let resultProducts;

  if (changeCategory !== "all") {
    resultProducts = emptyProducts
      .filter((product) => product.category === changeCategory)
      .filter(
        (product) =>
          product.productName.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search)
      );
  } else {
    resultProducts = emptyProducts.filter(
      (product) =>
        product.productName.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
    );
  }

  const filterCategory = (e) => {
    setChangeCategory(e.target.value);
  };

  const getPriceValue = (e) => {
    console.log(e.target.value);
    setSortPriceValue(e.target.value);
  };

  return {
    resultProducts,
    getPriceValue,
    filterCategory,
    changeCategory,
    handleSearch,
    search,
    sortPriceValue,
  };
};

export default UseFeature;

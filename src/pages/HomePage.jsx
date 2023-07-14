import Form from "../components/Form";
import Table from "../components/Table";

import Header from "../components/Header";
import UseCRUD from "../hooks/UseCRUD";
import UseFeature from "../hooks/UseFeature";

const HomePage = () => {
  const {
    deleteProduct,
    editProduct,
    addProduct,
    handle,
    selected,
    Product,
    Products
  } = UseCRUD();

  const {
    resultProducts,
    filterCategory,
    changeCategory,
    handleSearch,
    search,
    getPriceValue,
    sortPriceValue,
  } = UseFeature(Products);

  return (
    <div className="main text-white w-screen h-screen">
      <div className="bg container mx-auto">
        <Header
          handleSearch={handleSearch}
          search={search}
          sortPriceValue={sortPriceValue}
          getPriceValue={getPriceValue}
          filterCategory={filterCategory}
          changeCategory={changeCategory}
        />

        <div className="w-10/12 mx-auto flex mt-5 lg:flex">
          <div className="w-2/5 lg:w-full">
            <Form
              handle={handle}
              Product={Product}
              addProduct={addProduct}
              selected={selected}
            />
          </div>
          <div className="w-3/5 lg:w-full">
            <Table
              Products={resultProducts}
              editProduct={editProduct}
              deleteProduct={deleteProduct}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

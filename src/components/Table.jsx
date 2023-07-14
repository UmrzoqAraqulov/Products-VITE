import React, { memo, useEffect } from "react";
import "./table.scss";
const Table = memo(({ Products, editProduct, deleteProduct }) => {
  useEffect(() => {
    let items = $(".row-card .nfl");
    const numItems = items.length;
    const perPage = 4;
    console.log(numItems);

    items.slice(perPage).hide();

    $("#pagination-container").pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "&laquo;",
      nextText: "&raquo;",
      onPageClick: function (pageNumber) {
        let showFrom = perPage * (pageNumber - 1);
        let showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
      },
    });
  }, [Products]);

  return (
    <section className="wrapper w-full p-0 m-0 rounded-sm">
      <main className="row title">
        <ul>
          <li>№</li>
          <li>Product name</li>
          <li>Price</li>
          <li>Category</li>
          <li>Quantity</li>
          <li>Actions</li>
        </ul>
      </main>

      <section
        style={{ height: "370px" }}
        className="row-card row-fadeOut-wrapper overflow-y-scroll"
      >
        {Products
          ? Products.map((product, index) => {
              const {
                id,
                productName,
                price,
                category,
                description,
                quantity,
              } = product;
              return (
                <article key={id} className="row nfl">
                  <ul>
                    <li>{index + 1}</li>
                    <li>{productName}</li>
                    <li>{price}</li>
                    <li>{category}</li>
                    <li>{quantity}</li>
                    <li>
                      <div className="flex gap-3 items-center">
                        <div>
                          <i
                            className="fa-solid fa-pen bg-green-600 text-white px-2 py-2 rounded-full cursor-pointer"
                            onClick={() => editProduct(id)}
                          ></i>
                        </div>
                        <div onClick={() => deleteProduct(id)}>
                          <i className="fa-solid fa-trash-can text-red-600 cursor-pointer text-xl"></i>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="more-content">
                    <li className="flex w-full">
                      <p>Description: {description}</p>
                      <p className="flex pl-1"></p>
                    </li>
                  </ul>
                </article>
              );
            })
          : ""}
      </section>
      <div id="pagination-container"></div>
    </section>
  );
});

export default Table;

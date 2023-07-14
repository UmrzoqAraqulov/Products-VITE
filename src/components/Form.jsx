import { memo } from "react";
import { CATEGORIES } from "../data/data";

const Form = memo(({addProduct, Product, handle ,selected}) => {
  const { productName, price, category, quantity, description } = Product;
  return (
    <div className="bg-white bg-opacity-60 p-4 rounded-md text-gray-900 font-medium">
      <h2 className="text-2xl mb-3 font-bold">{selected?"Product Editing":"Product Adding"}</h2>
      <form className="flex flex-col gap-2" onSubmit={addProduct}>
        <div className="flex flex-col gap-1">
          <label htmlFor="productName" className="font-semibold">
            Product Name
          </label>
          <input
            required
            style={{ border: "1.5px solid black" }}
            className="font-medium bg-transparent outline-none py-1 px-2 rounded-md placeholder:text-white"
            placeholder="Product Name"
            type="text"
            id="productName"
            name="productName"
            onChange={handle}
            value={productName}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="price" className="font-semibold">
            Price
          </label>
          <input
            required
            style={{ border: "1.5px solid black" }}
            className="font-medium bg-transparent outline-none  py-1 px-2 rounded-md placeholder:text-white"
            placeholder="Price"
            type="number"
            id="price"
            name="price"
            onChange={handle}
            value={price}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="quantity" className="font-semibold">
            Quantity
          </label>
          <input
            required
            style={{ border: "1.5px solid black" }}
            className="font-medium bg-transparent outline-none py-1 px-2 rounded-md placeholder:text-white"
            placeholder="Quantity"
            type="number"
            id="quantity"
            name="quantity"
            onChange={handle}
            value={quantity}
          />
        </div>

        <div className="flex gap-1 my-2 items-center">
          <label htmlFor="category" className="font-semibold">
            Category:
          </label>
          <select
            value={category}
            onChange={handle}
            className="ml-1 outline-none font-semibold text-white rounded-sm py-1 px-4 bg-transparent border-2 border-gray-700"
            name="category"
            id="category"
          >
            {CATEGORIES.map((el, id) => {
              return (
                <option key={id} className="text-gray-700 font-medium" value={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="font-semibold">
            Description
          </label>
          <textarea
            style={{ border: "1.5px solid black" }}
            className="font-medium bg-transparent outline-none  py-1 px-2 rounded-md placeholder:text-white"
            placeholder="Description"
            type="text"
            id="description"
            name="description"
            onChange={handle}
            value={description}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-1.5 mt-2 rounded-md hover:bg-blue-700 text-xl mx-auto w-40"
        >
        {selected?"Save":"Add"}
        </button>
      </form>
    </div>
  );
});


Form.displayName = Form;

export default Form;

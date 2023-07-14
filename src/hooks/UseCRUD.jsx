import { useCallback, useState } from 'react'
import { CATEGORIES } from "../data/data";
import { v4 as uuidv4 } from "uuid";

const UseCRUD = () => {
  const [Product, setProduct] = useState({
    category: CATEGORIES[0],
    description: "",
    price: "",
    productName: "",
    quantity: "",
  });
  const arr = JSON.parse(localStorage.getItem("products")) || [];
  const [Products, setProducts] = useState(arr);

  const [selected, setSelected] = useState(null);

  const setProductsData = useCallback((newProducts) => {
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  },[Products]);

  const handle = useCallback((e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value });
  },[Product]);

 

  const addProduct = useCallback(
    (e) => {
      e.preventDefault();
      let newProducts = [];
      if (!selected) {
        newProducts = [...Products, { ...Product, id: uuidv4() }];
      } else {
        newProducts = Products.map((product) => {
          if (product.id === selected) {
            return Product;
          }
          return product;
        });
      }
      setProductsData(newProducts);
      setProduct({
        category: CATEGORIES[0],
        description: "",
        price: "",
        productName: "",
        quantity: "",
      });
      setSelected(null)
    },
    [Product,selected]
  );

  const editProduct = useCallback((id) => {
    let newProduct = Products.find((product) => product.id === id);
    setSelected(id);
    setProduct(newProduct);
  }, [Product,selected]);

  const deleteProduct = useCallback(
    (id) => {
      let deleteRequest = window.confirm("");
      console.log(id, deleteRequest);
      let newProducts;
      if (deleteRequest) {
        newProducts = Products.filter((product) => product.id !== id);
        setProductsData(newProducts);
      }
    },
    [Products]
  );

  return {deleteProduct,editProduct,addProduct,handle,selected,Product,Products};
}

export default UseCRUD;
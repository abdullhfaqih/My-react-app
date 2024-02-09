import axios from "axios";

export const getProducts = (collBack) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      collBack(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getDetailProduct = (collBack, id) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      collBack(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

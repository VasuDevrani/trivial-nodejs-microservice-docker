const userList = document.getElementsByClassName("userList");
const productList = document.getElementsByClassName("productList");
const username = document.getElementsByClassName("username");
const productname = document.getElementsByClassName("productname");
const price = document.getElementsByClassName("productprice");

const USER_ADD_URL = "";
const PRODUCT_ADD_URL = "";
const USER_GET_URL = "";
const PRODUCT_GET_URL = "";

const addUser = () => {
  if (username === "") return;
  fetch(USER_ADD_URL, {
    method: "POST",
    body: JSON.stringify({ name: username }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const addProduct = () => {
  if (productname === "" || price === "") return;
  fetch(PRODUCT_ADD_URL, {
    method: "POST",
    body: JSON.stringify({ name: productname, price: price }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

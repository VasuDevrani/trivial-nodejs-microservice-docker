const userList = document.querySelector(".userList");
const productList = document.querySelector(".productList");
const username = document.querySelector(".username");
const productname = document.querySelector(".productname");
const price = document.querySelector(".productprice");

const USER_URL = "http://localhost:3001/";
const PRODUCT_URL = "http://localhost:3002/";

const addUser = () => {
  if (username.value === "") return;
  fetch(USER_URL, {
    method: "POST",
    body: JSON.stringify({ name: username.value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateUserList();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const updateUserList = () => {
  fetch(USER_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    userList.textContent = JSON.stringify(data?.users.map(item => item.name))
  });
}

const addProduct = () => {
  if (productname.value === "" || price.value === "") return;
  fetch(PRODUCT_URL, {
    method: "POST",
    body: JSON.stringify({ name: productname.value, price: price.value }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateProductList();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

const updateProductList = () => {
  fetch(PRODUCT_URL)
  .then(res => res.json())
  .then(data => productList.textContent = data?.data.map(item => `${item.name}, ${item.price}`));
}

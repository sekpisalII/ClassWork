import { CardComponent } from "../component/CardComponent.js";
import { UserComponent } from "../component/UserComponent.js";
import { ProductComponent } from "../component/ProductComponent.js";
import { getData } from "../store/fetchApi.js";
let productRender = document.querySelector("#productRender");
let userRender = document.querySelector("#userRender");
let products = await getData("products");
let users = await getData("users");
products.map(
  (product) => (productRender.innerHTML += ProductComponent(product))
);
users.map((user) => (userRender.innerHTML += CardComponent(user)));

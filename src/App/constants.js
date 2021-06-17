import Home from "../Views/Home";
import Product from "../Views/Product";
import Results from "../Views/Results";

export const ROUTES = [
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/items/:id",
    title: "Product",
    component: Product,
  },
  {
    path: "/items",
    title: "Items",
    component: Results,
  },
];

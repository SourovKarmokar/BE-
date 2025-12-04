import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/NavBar";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {index: true, Component: Home},
      {path: "/product" , Component: Product},
      { path: "/productdetails/:id" , Component: ProductDetails },
      { path: "/cart" , Component: Cart }
    ]
  }
])

function App() {
  return <>
  <RouterProvider router={router}/>
  </>;
}

export default App;

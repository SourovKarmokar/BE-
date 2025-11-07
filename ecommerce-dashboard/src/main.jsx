import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from './components/Dashboard/Dashboard.jsx';
import CreateProduct from './components/Product/CreateProduct.jsx';
import AllProduct from './components/Product/AllProduct.jsx';
import CreateCategory from './components/Category/CreateCategory.jsx';
import AllCategories from './components/Category/AllCategories.jsx';
import UpdateCategory from './components/Category/UpdateCategory.jsx';
import CreateSubCategory from './components/SubCategory/CreateSubCategory';
import AllSubCategories from './components/SubCategory/AllSubCategories';
import UpdateSubCategory from './components/SubCategory/UpdateSubCategory.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
    children: [
      // { index: true, Component : Dashboard },
      { path: "/create-product", Component: CreateProduct },
      { path: "/all-product", Component: AllProduct },
      { path: "/create-category", Component: CreateCategory },
      { path: "/all-categories", Component: AllCategories },
      { path: "/update-category", Component: UpdateCategory  },
      { path: "/create-subcategory", Component: CreateSubCategory  },
      { path: "/all-subcategories", Component: AllSubCategories  },
      { path: "/update-subcategory/:id", Component: UpdateSubCategory  }
      
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)

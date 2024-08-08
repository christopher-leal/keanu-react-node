import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { FormPage } from "./pages/form";
import { HistoryPage } from "./pages/history";
import { ImagePage } from "./pages/image";
import { PageNotFound } from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
      {
        path:"/",
        element:<FormPage/>
      },
      {
        path:"/history",
        element:<HistoryPage/>
      },
      {
        path:"/image",
        element:<ImagePage/>
      },
    ]
  },
  {
    path:"*",
    element:<PageNotFound/>
  }

]);

export default router
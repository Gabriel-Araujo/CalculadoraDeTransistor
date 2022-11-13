import logo from './logo.svg';
import './App.css';

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";

import SelectMenu from "./pages/selectMenu";
import PolarizedBase from "./pages/PolarizedBase";



const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectMenu />
  },
  {
    path: "/polarized_base",
    element: <PolarizedBase />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

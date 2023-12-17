import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "./Screens/Login.jsx";
import Layout from "./Layout.jsx";
import Admin from "./Screens/Admin/Admin.jsx";
import Home from "./Screens/Home.jsx";
import Addstudent from "./Screens/AddStudent/AddStudent.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<Home/>}/>
      <Route path="/admin-panel" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path='/attendance' element={<Attendance/>}/> */}
      <Route path='/add-student' element={<Addstudent/>}/>
      {/* <Route path='/logout' element={<Logout/>}/> */}
      <Route />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

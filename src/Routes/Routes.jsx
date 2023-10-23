import React from 'react'
import * as ReactDOM from "react-dom";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
  } from "react-router-dom";
  import MainLayout from '../components/Layout/MianLayout/MainLayout';
  import AdminLayout from '../components/Layout/AdminLayout/AdminLayout';
  import AddBuilding from '../pages/AdminPages/addBuilding';
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route index element={<MainLayout/>}/>
        <Route path="dashboard" element={<AddBuilding/>} />
      </Route>
    )
  );
function Routes() {
  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default Routes

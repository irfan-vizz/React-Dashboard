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
  import EditBuilding from '../pages/AdminPages/EditBuilding';
  import BuildingList from '../pages/AdminPages/BuildingList';
  import BuildingDetail from '../pages/AdminPages/BuildingDetail';
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route index element={<MainLayout/>}/>
        <Route path="/dashboard" element={<BuildingList/>} />
        <Route path="/dashboard/building_add" element={<AddBuilding/>} />
        <Route path="/dashboard/building_edit/:id" element={<EditBuilding/>} />
        <Route path="/dashboard/building_detail" element={<BuildingDetail/>} />
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

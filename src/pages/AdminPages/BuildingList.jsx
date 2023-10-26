import React from 'react'
import ManageBuildings from "../../components/AdminComponents/ManageBuildings"
import AdminLayout from '../../components/Layout/AdminLayout/AdminLayout'
function BuildingList() {
  return (
    <div>
        <AdminLayout>
            <ManageBuildings/>
        </AdminLayout>
    </div>
  )
}

export default BuildingList

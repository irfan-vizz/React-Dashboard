import React from 'react'
import AdminLayout from '../../components/Layout/AdminLayout/AdminLayout'
import Building from '../../components/AdminComponents/Building';
function EditBuilding() {
    const dataToPass = "Edit Building";
  return (
    <div>
      <AdminLayout>
           <Building data={dataToPass}/>
      </AdminLayout>
    </div>
  )
}

export default EditBuilding

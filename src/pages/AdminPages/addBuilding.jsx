import React from 'react'
import AdminLayout from '../../components/Layout/AdminLayout/AdminLayout'
import Building from '../../components/AdminComponents/Building';
function AddBuilding() {
  const dataToPass = "Add Building";
  return (
    <div>
      <AdminLayout>
           <Building data={dataToPass}/>
      </AdminLayout>
    </div>
  )
}

export default AddBuilding

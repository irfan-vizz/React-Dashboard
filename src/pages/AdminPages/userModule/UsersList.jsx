import React from 'react'
import UsersListComponent from '../../../components/AdminComponents/userModule/UsersList'
import AdminLayout from '../../../components/Layout/AdminLayout/AdminLayout'
function UsersList() {
  return (
    <div>
        <AdminLayout>
          <UsersListComponent/>
        </AdminLayout>
    </div>
  )
}

export default UsersList

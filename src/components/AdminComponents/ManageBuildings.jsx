import React from 'react'
import { Link } from 'react-router-dom'
function ManageBuildings() {
  return (
    <>
        <div class="contentCard">
            <div class="titleWrapper"><span>Manage Buildings</span>

                <div>
                    {/* <!-- <button class="myBtn success squre toggleFilters">
                        <svg viewBox="0 0 24 24">
                            <use xlink:href="#filter"></use>
                        </svg>
                    </button> --> */}
                    <button class="myBtn shadow ml-auto"><i class="fa fa-plus-circle"></i> <Link to={'/dashboard/building_add'}> Add Building </Link></button>
                </div>
            </div>

                <div class="row align-items-md-end">
                    <div class="col-12 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <div class="search">
                            <div class="searchField">
                                <input class="form-control" type="text" placeholder="Search"/>
                                <div class="icon">
                                    {/* <svg viewBox="0 0 24.46 24.46">
                                        <use xlink:href="#search"></use>
                                    </svg> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>


                </div>

            <div class="mainTable table-responsive dataTable">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th><input type="checkbox" class="customCheck"/></th>
                            <th class="sort">Building ID</th>
                            <th class="sort">Address</th>
                            <th class="sort">City</th>
                            <th class="sort">Postal</th>
                            <th class="sort">Province</th>
                            <th class="sort">Region</th>
                            <th class="sort">Intersection</th>
                            <th class="sort">Phone</th>
                            <th class="sort">No. Of Suites</th>
                            <th class="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" class="customCheck"/></td>
                            <td><b>1</b></td>
                            <td><img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/28/000000/external-building-real-estate-flatart-icons-lineal-color-flatarticons-1.png"/> 1030 Thinkbound Drive</td>
                            <td>Oakville</td>
                            <td>L6H 2A8</td>
                            <td>Ontario</td>
                            <td>Oakville</td>
                            <td>Trafalgar & QEW</td>
                            <td>(867) 969-6766</td>
                            <td>1</td>
                            <td class="text-right">
                                <div class="dropleft">
                                    <button type="button" class="actionEclips dropdown-toggle" data-toggle="dropdown">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <div class="dropdown-menu dropDesign">
                                        <Link to={'/dashboard/building_edit'}>Edit 
                                            <span>
                                                {/* <svg viewBox="0 0 13.635 14.678">
                                                    <use xlink:href="#edit"></use>
                                                </svg> */}
                                            </span>
                                        </Link>
                                        <Link to={'/dashboard/building_detail'}>Details
                                            <span>
                                                {/* <svg viewBox="0 0 11.563 14.453">
                                                    <use xlink:href="#file"></use>
                                                </svg> */}
                                            </span>
                                        </Link>
                                        <a href="#">Contact
                                            <span>
                                                {/* <svg viewBox="0 0 20.496 13.835 ">
                                                    <use xlink:href="#email"></use>
                                                </svg> */}
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="cardFooter">
                <button class="myBtn danger squre deleteThis">
                    {/* <svg viewBox="0 0 24.728 19.783">
                        <use xlink:href="#delete"></use>
                    </svg> */}
                </button>
            </div>
        </div>
    </>
  )
}

export default ManageBuildings

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
function ManageBuildings() {
    const [BuildingData, setBuildingData] = useState([])  
    let buildingsApiString = 'http://localhost:3001/buildings'
    useEffect(() => {
        console.log('useEffect ran'); // Add this line
        axios.get('http://localhost:3001/buildings')
          .then((response) => {
            console.log(response.data)
            setBuildingData(response.data)
            console.log(BuildingData,"BuildingData")
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
        // axios.post('http://localhost:3001/posts', { "id": 3, "title": "JSON Server Example2" })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      }, []);
      console.log('Component rendered'); // Add this line
  return (
    <>
        {/* <ul>
            {BuildingData.map((buildingEle, buildingIndex)=>(
                <li key ={buildingIndex}>{buildingEle.id}:{buildingEle.title}</li>
            ))} 
        </ul> */}
        <div className="contentCard">
            <div className="titleWrapper"><span>Manage Buildings</span>

                <div>
                    {/* <!-- <button className="myBtn success squre toggleFilters">
                        <svg viewBox="0 0 24 24">
                            <use xlink:href="#filter"></use>
                        </svg>
                    </button> --> */}
                    <button className="myBtn shadow ml-auto"><i className="fa fa-plus-circle"></i> <Link to={'/dashboard/building_add'}> Add Building </Link></button>
                </div>
            </div>

                <div className="row align-items-md-end">
                    <div className="col-12 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <div className="search">
                            <div className="searchField">
                                <input className="form-control" type="text" placeholder="Search"/>
                                <div className="icon">
                                    {/* <svg viewBox="0 0 24.46 24.46">
                                        <use xlink:href="#search"></use>
                                    </svg> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>


                </div>

            <div className="mainTable table-responsive dataTable">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th><input type="checkbox" className="customCheck"/></th>
                            <th className="sort">Building ID</th>
                            <th className="sort">Address</th>
                            <th className="sort">City</th>
                            <th className="sort">Postal</th>
                            <th className="sort">Province</th>
                            <th className="sort">Region</th>
                            <th className="sort">Intersection</th>
                            <th className="sort">Phone</th>
                            <th className="sort">No. Of Suites</th>
                            <th className="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {BuildingData.map((buildingEle, buildingIndex)=>(
                        <tr key ={buildingIndex}>
                        <td><input type="checkbox" className="customCheck"/></td>
                        <td><b>{buildingEle.id}</b></td>
                        <td><img src="https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/28/000000/external-building-real-estate-flatart-icons-lineal-color-flatarticons-1.png"/> {buildingEle.address.street}</td>
                        <td>{buildingEle.address.city}</td>
                        <td>{buildingEle.address.postalCode}</td>
                        <td>{buildingEle.address.province}</td>
                        <td>{buildingEle.address.region}</td>
                        <td>Trafalgar & QEW</td>
                        <td>{buildingEle.BuildingContact.contact}</td>
                        <td>1</td>
                        <td className="text-right">
                            <div className="dropleft">
                                <button type="button" className="actionEclips dropdown-toggle" data-toggle="dropdown">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div className="dropdown-menu dropDesign">
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
                // <li key ={buildingIndex}>{buildingEle.id}:{buildingEle.title}</li>
            ))}
                        
                    </tbody>
                </table>
            </div>

            <div className="cardFooter">
                <button className="myBtn danger squre deleteThis">
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

import React from 'react'
import {homeIcon, buildingIcon, invntryIcon, tradeIcon, reportsIcon, usersIcon, settingsIcon, notificationIcon} from './svgIcons';
import parse from 'html-react-parser';

function Sidebar() {
  return (
    <>
      <section className="sideBar">
        <div className="logoWrapper">
            <a className="logo" href="#">
                <img className="logo" src="assets/images/logosm.png" alt="" />
            </a>
        </div>
        <div className="menuListing mainMenu">
            <ul>
                <li>
                    <a className="navItem" data-toggle="purchase">
                        <i> {parse(buildingIcon.icon)}</i>
                        <span>Purchase Orders</span>
                    </a>
                </li>
                <li>
                    <a className="navItem">
                        <i> {parse(buildingIcon.icon)}</i>
                        <span>Work Confirmation</span>
                    </a>
                </li>
                <li>
                    <a className="navItem" data-toggle="work">
                        <i> {parse(buildingIcon.icon)}</i>
                        <span>Work Orders</span>
                    </a>
                </li>
                <li>
                    <a className="navItem" data-toggle="traffic">
                        <i> {parse(buildingIcon.icon)}</i>
                        <span>Traffic Sheet</span>
                    </a>
                </li>
            </ul>
        </div>
        <div className="menuListing logout">
            <ul>
                <li>
                    <a className="navItem" href="#">
                        <i>
                        {parse(buildingIcon.icon)}

                        </i>
                        <span>Logout</span>
                    </a>
                </li>
              </ul>
        </div>
        <div className="innerSidebar" data-attr="purchase">
            <div className="sideBarHeader">
                <h2>Purchase Order</h2>
                   
            </div>
            <div className="sideBarBody">
                <ul>
                    <li><a href="addPurchaseOrder.html">Create Order </a></li>
                    <li><a href="poList.html">View Existing</a></li>
                </ul>
            </div>
        </div>
        <div className="innerSidebar" data-attr="work">
            <div className="sideBarHeader">
                <h2>Document Center</h2>
                   
            </div>
            <div className="sideBarBody">
                <ul>
                    <li><a href="workOrdersList.html">Work Order </a></li>
                    <li><a href="addWorkOrder.html">Work Order Creation</a></li>
                </ul>
            </div>
        </div>
        <div className="innerSidebar" data-attr="traffic">
            <div className="sideBarHeader">
                <h2>Traffic Sheet</h2>
                   
            </div>
            <div className="sideBarBody">
                <ul>
                    <li><a href="trafficSheet.html">View Traffic Sheet</a></li>
                    <li><a href="addTrafficSheet.html">Create Traffic Sheet</a></li>
                    <li><a href="buildingList.html">View Buildings</a></li>
                    <li><a href="addUnit.html">Add Unit</a></li>
                </ul>
            </div>
        </div>
    </section> 
    </>
  )
}

export default Sidebar

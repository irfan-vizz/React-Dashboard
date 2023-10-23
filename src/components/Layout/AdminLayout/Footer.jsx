import React from 'react'
import {homeIcon, buildingIcon, invntryIcon, tradeIcon, reportsIcon, usersIcon, settingsIcon, notificationIcon} from './svgIcons';
import parse from 'html-react-parser';
function Footer() {
  return (
    <>
       <div className="bottomNav toggleThis" data-attr="mobileNav">
        <div className="bgClose closeNav"></div>
        <div className="navContainer">
            <div className="navHeader">
                <div className="logo d-none d-sm-block">
                    <img src="assets/images/mobileNavLogo.png" alt=""/>
                </div>
                <div className="d-block d-sm-none">
                    <div className="profile">
                        <div className="profileImg">
                            <img src="assets/images/profileImg.png" alt=""/>
                        </div>
                        <span>George Lucas</span>
                    </div>
                </div>
                <div className="closeNav closeThis">
                {parse(buildingIcon.icon)}
                </div>
            </div>
            <ul>
                <li>
                    <a className="navItem toggleNav" data-toggle="buildings">
                        <i>{parse(buildingIcon.icon)}
                        </i>
                        <span>Buildings</span>
                    </a>
                </li>
                <li>
                    <a className="navItem toggleNav" data-toggle="inventory">
                        <i>{parse(buildingIcon.icon)}
                        </i>
                        <span>Inventory</span>
                    </a>
                </li>
                <li>
                    <a className="navItem toggleNav" data-toggle="trade">
                        <i>{parse(buildingIcon.icon)}
                        </i>
                        <span>Trades</span>
                    </a>
                </li>
                <li>
                    <a className="navItem toggleNav" data-toggle="reports">
                        <i>{parse(buildingIcon.icon)}
                        </i>
                        <span>Reports</span>
                    </a>
                </li>
                <li>
                    <a className="navItem" href="usesrList.html">
                        <i>{parse(buildingIcon.icon)}
                        </i>
                        <span>Users</span>
                    </a>
                </li>
                <li>
                    <a className="navItem toggleNav" data-toggle="settings">
                        <i>{parse(buildingIcon.icon)}
                        </i>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
            <div className="innerMenuContainer toggleThis" data-attr="buildings">
                <div className="navHeader">
                    <h2>Buildings</h2>
                    <div className="closeNav closeThis" data-close="buildings">
                    {parse(buildingIcon.icon)}
                    </div>
                </div>
                <ul>
                    <li><a href="buildingList.html">Building List</a></li>
                    <li><a href="addBuilding.html">Add Building</a></li>
                </ul>
            </div>
            <div className="innerMenuContainer toggleThis" data-attr="inventory">
                <div className="navHeader">
                    <h2>Inventory</h2>
                    <div className="closeNav closeThis" data-close="inventory">
                    {parse(buildingIcon.icon)}
                    </div>
                </div>
                <ul>
                    <li><a href="inventoryList.html">View Inventory</a></li>
                    <li><a href="addInventory.html">Add Inventory</a></li>
                </ul>
            </div>
            <div className="innerMenuContainer toggleThis" data-attr="trade">
                <div className="navHeader">
                    <h2>Trades</h2>
                    <div className="closeNav closeThis" data-close="trade">
                    {parse(buildingIcon.icon)}
                    </div>
                </div>
                <ul>
                    <li><a href="tardeList.html">View Trades</a></li>
                    <li><a href="addTrade.html">Add Trades</a></li>
                </ul>
            </div>
            <div className="innerMenuContainer toggleThis" data-attr="reports">
                <div className="navHeader">
                    <h2>Reports</h2>
                    <div className="closeNav closeThis" data-close="reports">
                    {parse(buildingIcon.icon)}
                    </div>
                </div>
                <ul>
                    <li><a href="poReport.html">PO Report</a></li>
                    <li><a href="vacancyReport.html">Vacancy Report</a></li>
                </ul>
            </div>
            <div className="innerMenuContainer toggleThis" data-attr="settings">
                <div className="navHeader">
                    <h2>Reports</h2>
                    <div className="closeNav closeThis" data-close="settings">
                    {parse(buildingIcon.icon)}
                    </div>
                </div>
                <ul>
                    <li><a href="">Account Settings</a></li>
                    <li><a href="">Application Settings</a></li>
                    <li><a href="">Logout</a></li>
                </ul>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Footer

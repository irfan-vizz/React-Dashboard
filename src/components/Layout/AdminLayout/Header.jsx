import React from 'react'
import {homeIcon, buildingIcon, invntryIcon, tradeIcon, reportsIcon, usersIcon, settingsIcon, notificationIcon} from './svgIcons';
import logo from '../../../assets/profileImg.png'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
function Header() {
  return (
    <>
    <section className="topBar">
        <div className="topBarInnwe">
            <div className="leftNave">
                <ul className="navList">
                    <li className="mainDropdown buildings dropDown">
                        <a href="#" className="dropdown-toggle" id="dropDownLocations" data-toggle="dropdown" aria-expanded="false">
                            <i>
                            {parse(buildingIcon.icon)}
                            </i>
                            <span>1030 Thinkbound</span><i className="fa fa-angle-down"></i>
                        </a>
                        <span className="arrow"></span>
                        <div className="customDropdown dropdown-menu">
                            <div className="dropdownHead" aria-labelledby="dropDownLocations">
                                {parse(buildingIcon.icon)}
                                <span>Assigned Buildings</span>
                            </div>
                            <div className="dropDownContent">
                                <ul>
                                    <li>
                                        <a href="buildingDetails.html">
                                            <h2>1030 Thinkbound Drive</h2>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="buildingDetails.html">
                                            <h2>1030 Thinkbound Drive</h2>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="buildingDetails.html">
                                            <h2>1030 Thinkbound Drive</h2>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="buildingDetails.html">
                                            <h2>1030 Thinkbound Drive</h2>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="buildingDetails.html">
                                            <h2>1030 Thinkbound Drive</h2>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="buildingDetails.html">
                                            <h2>1030 Thinkbound Drive</h2>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="showThis">
                        <a className="navItem menuBtn toggleNav" data-toggle="mobileNav">
                        {parse(buildingIcon.icon)}
                            {/* <!-- <span>menu</span> --> */}
                        </a>

                    </li>
                    <li className="hideThis">
                        <Link className="navItem" to={"/dashboard"}>
                            <i>{parse(buildingIcon.icon)}
                            </i>
                            <span>Buildings</span>
                        </Link>
                        {/* <!-- <div className="dropDownWrapper">
                            <ul>
                                <li><a href="buildingList.html">Building List <i className="fa fa-angle-right"></i></a></li>
                                <li><a href="addBuilding.html">Add Building <i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div> --> */}
                    </li>
                    {/* <li className="dropDown hideThis">
                        <a className="navItem" href="#">
                            <i>{parse(buildingIcon.icon)}
                            </i>
                            <span>Inventory</span>
                        </a>
                        <div className="dropDownWrapper">
                            <ul>
                                <li><a href="inventoryList.html">View Inventory <i className="fa fa-angle-right"></i></a>
                                </li>
                                <li><a href="addInventory.html">Add Inventory <i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropDown hideThis">
                        <a className="navItem" href="#">
                            <i>{parse(buildingIcon.icon)}
                            </i>
                            <span>Trades</span>
                        </a>
                        <div className="dropDownWrapper">
                            <ul>
                                <li><a href="tardeList.html">View Trades <i className="fa fa-angle-right"></i></a></li>
                                <li><a href="addTrade.html">Add Trades <i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="dropDown hideThis">
                        <a className="navItem" href="#">
                            <i>{parse(buildingIcon.icon)}
                            </i>
                            <span>Reports</span>
                        </a>
                        <div className="dropDownWrapper">
                            <ul>
                                <li><a href="poReport.html">PO Report <i className="fa fa-angle-right"></i></a></li>
                                <li><a href="vacancyReport.html">Vacancy Report <i className="fa fa-angle-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </li> */}
                </ul>
            </div>
            <div className="rightNav">
                <ul className="navList">
                    <li className="hideThis">
                        <a className="navItem" href="usesrList.html">
                            <i>{parse(buildingIcon.icon)}
                            </i>
                            <span>Users</span>
                        </a>
                    </li>
                    <li className="dropDown hideThis">
                        <a className="navItem" href="#">
                            <i>{parse(buildingIcon.icon)}
                            </i>
                            <span>Settings</span>
                        </a>
                        <div className="dropDownWrapper">
                            <ul>
                                <li><a href="">Account Settings <i className="fa fa-angle-right"></i></a></li>
                                <li><a href="">Application Settings <i className="fa fa-angle-right"></i></a></li>
                                <li><a href="">Logout <i className="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mainDropdown">
                        <a href="#" className="dropdown-toggle navItem" id="dropDownNotification" data-toggle="dropdown" aria-expanded="false">
                            <i>
                            {parse(buildingIcon.icon)}
                                <span className="dot"></span>
                            </i>
                        </a>
                        <span className="arrow"></span>
                        <div className="customDropdown notificationDropdown dropdown-menu">
                            <div className="dropdownHead">
                            {parse(buildingIcon.icon)}
                                <span>Notifications</span>
                            </div>
                            <div className="dropDownContent">
                                <div className="notifications">
                                    <a className="new" href="#">
                                        <div className="userImg">
                                            <img src={logo} alt=""/>
                                        </div>
                                        <div className="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a className="new" href="#">
                                        <div className="userImg">
                                            <img src={logo} alt=""/>
                                        </div>
                                        <div className="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="userImg">
                                            <img src={logo} alt=""/>
                                        </div>
                                        <div className="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="userImg">
                                            <img src={logo} alt=""/>
                                        </div>
                                        <div className="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="userImg">
                                            <img src={logo} alt=""/>
                                        </div>
                                        <div className="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="userImg">
                                            <img src={logo} alt=""/>
                                        </div>
                                        <div className="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="d-none d-sm-block">
                        <div className="profile">
                            <div className="profileImg">
                                <img src={logo} alt=""/>
                            </div>
                            <span>George Lucas</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default Header

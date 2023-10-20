import React from 'react'

function Header() {
  return (
    <div>
          <section class="topBar">
        <div class="topBarInnwe">
            <div class="leftNave">
                <ul class="navList">
                    {/* <!--  --> */}
                    <li class="mainDropdown buildings dropDown">
                        <a href="#" class="dropdown-toggle" id="dropDownLocations" data-toggle="dropdown" aria-expanded="false">
                            <i>
                                <svg viewBox="0 0 19.246 19.245">
                                    <use xlink:href="#home"></use>
                                </svg>
                            </i>
                            <span>1030 Thinkbound</span><i class="fa fa-angle-down"></i>
                        </a>
                        <span class="arrow"></span>
                        <div class="customDropdown dropdown-menu">
                            <div class="dropdownHead" aria-labelledby="dropDownLocations">
                                <svg viewBox="0 0 19.246 19.245">
                                    <use xlink:href="#home"></use>
                                </svg>
                                <span>Assigned Buildings</span>
                            </div>
                            <div class="dropDownContent">
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
                    {/* <!--  --> */}
                    <li class="showThis">
                        <a class="navItem menuBtn toggleNav" data-toggle="mobileNav">
                            <svg _ngcontent-serverApp-c0="" class="ham hamRotate ham1" viewBox="0 0 100 100" width="80">
                                <path _ngcontent-serverApp-c0="" class="line top"
                                    d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40">
                                </path>
                                <path _ngcontent-serverApp-c0="" class="line middle" d="m 30,50 h 40"></path>
                                <path _ngcontent-serverApp-c0="" class="line bottom"
                                    d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40">
                                </path>
                            </svg>
                            {/* <!-- <span>menu</span> --> */}
                        </a>

                    </li>
                    <li class="hideThis">
                        <a class="navItem" href="buildingList.html">
                            <i><svg viewBox="0 0 26.837 30.671">
                                    <use xlink:href="#buildings"></use>
                                </svg>
                            </i>
                            <span>Buildings</span>
                        </a>
                        {/* <!-- <div class="dropDownWrapper">
                            <ul>
                                <li><a href="buildingList.html">Building List <i class="fa fa-angle-right"></i></a></li>
                                <li><a href="addBuilding.html">Add Building <i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div> --> */}
                    </li>
                    <li class="dropDown hideThis">
                        <a class="navItem" href="#">
                            <i><svg viewBox="0 0 23.095 30.794">
                                    <use xlink:href="#inventory"></use>
                                </svg>
                            </i>
                            <span>Inventory</span>
                        </a>
                        <div class="dropDownWrapper">
                            <ul>
                                <li><a href="inventoryList.html">View Inventory <i class="fa fa-angle-right"></i></a>
                                </li>
                                <li><a href="addInventory.html">Add Inventory <i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="dropDown hideThis">
                        <a class="navItem" href="#">
                            <i><svg viewBox="0 0 32.478 28.941">
                                    <use xlink:href="#trade"></use>
                                </svg>
                            </i>
                            <span>Trades</span>
                        </a>
                        <div class="dropDownWrapper">
                            <ul>
                                <li><a href="tardeList.html">View Trades <i class="fa fa-angle-right"></i></a></li>
                                <li><a href="addTrade.html">Add Trades <i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="dropDown hideThis">
                        <a class="navItem" href="#">
                            <i><svg viewBox="0 0 22.33 29.315">
                                    <use xlink:href="#reports"></use>
                                </svg>
                            </i>
                            <span>Reports</span>
                        </a>
                        <div class="dropDownWrapper">
                            <ul>
                                <li><a href="poReport.html">PO Report <i class="fa fa-angle-right"></i></a></li>
                                <li><a href="vacancyReport.html">Vacancy Report <i class="fa fa-angle-right"></i></a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="rightNav">
                <ul class="navList">
                    <li class="hideThis">
                        <a class="navItem" href="usesrList.html">
                            <i><svg viewBox="0 0 22.33 29.315">
                                    <use xlink:href="#users"></use>
                                </svg>
                            </i>
                            <span>Users</span>
                        </a>
                    </li>
                    <li class="dropDown hideThis">
                        <a class="navItem" href="#">
                            <i><svg viewBox="0 0 22.33 29.315">
                                    <use xlink:href="#settings"></use>
                                </svg>
                            </i>
                            <span>Settings</span>
                        </a>
                        <div class="dropDownWrapper">
                            <ul>
                                <li><a href="">Account Settings <i class="fa fa-angle-right"></i></a></li>
                                <li><a href="">Application Settings <i class="fa fa-angle-right"></i></a></li>
                                <li><a href="">Logout <i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mainDropdown">
                        <a href="#" class="dropdown-toggle navItem" id="dropDownNotification" data-toggle="dropdown" aria-expanded="false">
                            <i>
                                <svg viewBox="0 0 20.148 25.191">
                                    <use xlink:href="#notification"></use>
                                </svg>
                                <span class="dot"></span>
                            </i>
                        </a>
                        <span class="arrow"></span>
                        <div class="customDropdown notificationDropdown dropdown-menu">
                            <div class="dropdownHead">
                                <svg viewBox="0 0 20.148 25.191">
                                    <use xlink:href="#notification"></use>
                                </svg>
                                <span>Notifications</span>
                            </div>
                            <div class="dropDownContent">
                                <div class="notifications">
                                    <a class="new" href="#">
                                        <div class="userImg">
                                            <img src="assets/images/profileImg.png" alt=""/>
                                        </div>
                                        <div class="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a class="new" href="#">
                                        <div class="userImg">
                                            <img src="assets/images/profileImg.png" alt=""/>
                                        </div>
                                        <div class="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="userImg">
                                            <img src="assets/images/profileImg.png" alt=""/>
                                        </div>
                                        <div class="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="userImg">
                                            <img src="assets/images/profileImg.png" alt=""/>
                                        </div>
                                        <div class="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="userImg">
                                            <img src="assets/images/profileImg.png" alt=""/>
                                        </div>
                                        <div class="notiContent">
                                            <h2>Jacob Watkins <span>5 mins ago</span></h2>
                                            <span>Building Manager</span>
                                            <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
                                                Nonumy
                                                Eirmod Tempor Invidunt Ut Labore Et Dolore</p>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div class="userImg">
                                            <img src="assets/images/profileImg.png" alt=""/>
                                        </div>
                                        <div class="notiContent">
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
                    <li class="d-none d-sm-block">
                        <div class="profile">
                            <div class="profileImg">
                                <img src="assets/images/profileImg.png" alt=""/>
                            </div>
                            <span>George Lucas</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Header

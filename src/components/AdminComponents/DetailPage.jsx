import React from 'react'

function DetailPage() {
    const publicAssetsPath = process.env.PUBLIC_URL + '/assets';
  return (
    <>
      <div class="row">
            <div class="col-12 col-md-4 col-lg-3">

                <div class="contentCard dark mb-0">
                    <div class="titleWrapper"><span>Building Details</span></div>
                    <div class="details">
                        <div class="detailContent">
                            <h4>Building ID</h4>
                            <h2>01030PR</h2>
                        </div>
                        <div class="detailContent">
                            <h4>Legacy ID</h4>
                            <h2>1030</h2>
                        </div>
                        <div class="detailContent">
                            <h4>Country</h4>
                            <h2>Canada</h2>
                        </div>
                        <div class="detailContent">
                            <h4>City</h4>
                            <h2>Oakville</h2>
                        </div>
                        <div class="detailContent">
                            <h4>Province</h4>
                            <h2>Ontario</h2>
                        </div>
                        <div class="detailContent">
                            <h4>Region</h4>
                            <h2>Oakville</h2>
                        </div>
                        <div class="detailContent">
                            <h4>Street</h4>
                            <h2>Thinkbound Drive</h2>
                        </div>
                        <div class="detailContent">
                            <div class="d-flex align-items-center justify-content-between">
                                <h2>Visibility</h2>
                                <div class="toggleBtn withLable">
                                    <input type="checkbox" id="togglePrice" package="package4"/>
                                    <label for="togglePrice">
                                        <span class="on">ON</span>
                                        <span class="off">OFF</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="detailContent">
                            <div class="d-flex align-items-center justify-content-between">
                                <h2>Action</h2>
                                <div class="actionBtns">
                                    <a class="circleBtn" href="addBuilding.html">
                                        {/* <svg viewBox="0 0 13.635 14.678">
                                            <use xlink:href="#edit"></use>
                                        </svg> */}
                                    </a>
                                    <a class="circleBtn" href="#">
                                        {/* <svg viewBox="0 0 13.646 17.544">
                                            <use xlink:href="#delete2"></use>
                                        </svg> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8 col-lg-9">
                <div class="mapImg">
                    <img src={publicAssetsPath + '/images/map.png'} />
                </div>
            </div>
        </div>
    </>
  )
}

export default DetailPage

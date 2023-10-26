import React from 'react'
import { Link } from 'react-router-dom'
function Building(props) {
  return (
    <div>
      <div class="contentCard">
            <div class="titleWrapper"><span>{props.data}</span></div>
            <div class="formDesign">
                <h3 class="sectionTitle">Address</h3>
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Street Address</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Country</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Province</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>City</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Postal Code</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Legacy ID</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Area Size</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Region</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12  ">
                        <div class="form-group">
                            <label>Description</label>
                            <textarea class="form-control" rows="5"></textarea>
                        </div>
                    </div>
                </div>

                <hr class="splitCard"/>

                <h3 class="sectionTitle">Building Contact (Optional)</h3>
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Full Name</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Contact</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>Email</label>
                            <input class="form-control" type="text"/>
                        </div>
                    </div>
                    {/* <!-- <div class="col-12 col-md-4 col-lg-3">
                        <div class="form-group">
                            <label>PM Email</label>
                            <input class="form-control" type="text">
                        </div>
                    </div> --> */}
                </div>

                <a class="myBtn" href="buildingList.html">{(props.data == 'Edit Building')?'Save':'Add'}  Building</a>
                <a class="myBtn bdr" href="buildingList.html">Cancel</a>
            </div>
        </div>
    </div>
  )
}

export default Building

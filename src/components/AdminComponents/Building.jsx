import React , { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Building(props) {
    const [formData, setFormData] = useState({
        street: '',
        country:''
      });
    function handleChange (e){
        const { name, value } = e.target;
        console.log(e.target," e.target")
        console.log(name,"name", value, " value")

        setFormData({
            ...formData,
            [name]: value,
          });
          console.log(formData,"formData")
    }
    function handleSubmit(e){
        e.preventDefault();
    }
  return (
    <div>
      <div class="contentCard">
            <div class="titleWrapper"><span>{props.data}</span></div>
            <div class="formDesign">
                <form onSubmit={handleSubmit}>
                    <h3 class="sectionTitle">Address</h3>
                    <div class="row">
                        <div class="col-12 col-md-4 col-lg-3">
                            <div class="form-group">
                                <label>Street Address</label>
                                <input class="form-control" type="text" id='street' name='street' onChange={handleChange} value={formData.street}/>
                            </div>
                        </div>
                        <div class="col-12 col-md-4 col-lg-3">
                            <div class="form-group">
                                <label>Country</label>
                                <input class="form-control" type="text" id='country' name='country' onChange={handleChange} value={formData.country}/>
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

                    <button class="myBtn" type='submit'>{(props.data == 'Edit Building')?'Save':'Add'}  Building</button>
                    <a class="myBtn bdr" href="buildingList.html">Cancel</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Building

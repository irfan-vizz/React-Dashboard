import React , { useEffect, useState } from 'react'
import { Link, useParams  } from 'react-router-dom'
import axios from 'axios';
function Building(props) {
    const [BuildingData, setBuildingData] = useState({}) 
    const [updateBuilding, setupdateBuilding] = useState(false) 
    let { id } = useParams();
    console.log(id,"id")
    const [formData, setFormData] = useState({
        street: '',
        country:''
      });
      function generateUniqueID() {
        // Create a unique ID using the current timestamp and a random number
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 10000); // You can adjust the range as needed
      
        // Combine the timestamp and random number to create the ID
        const uniqueID = `${timestamp}-${random}`;
      
        return uniqueID;
      }
    function handleChange (e){
        setupdateBuilding(true)
        const { name, value } = e.target;
        console.log(e.target," e.target")
        console.log(name,"name", value, " value")

        setFormData({
            ...formData,
            [name]: value,
          });
          console.log(formData,"formData")
    }
    function editBuilding(e){
        e.preventDefault();
        axios.put(`http://localhost:3001/buildings/${id}`,{"address":formData})
          .then((response) => {
            console.log(response.data,"irfan")
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }
    function addBuilding(e){
        const dbID = generateUniqueID();
        e.preventDefault();
        axios.post(`http://localhost:3001/buildings`,{id:dbID,"address":formData})
          .then((response) => {
            console.log(response.data,"irfan")
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }
    useEffect(() => {
        console.log('useEffect ran'); // Add this line
        if(props.data == 'Edit Building') {
            axios.get(`http://localhost:3001/buildings/${id}`)
            .then((response) => {
              console.log(response.data,"irfan")
              setBuildingData(response.data.address)
              console.log(BuildingData,"BuildingData")
              setFormData(response.data.address)
              console.log(formData,"formDataInside")
             
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        }
        else{

        }
        
      }, []);
  return (
    <div>
      <div className="contentCard">
            <div className="titleWrapper"><span>{props.data}</span></div>
            <div className="formDesign">
                <form onSubmit={(props.data == 'Edit Building')?editBuilding:addBuilding}>
                    <h3 className="sectionTitle">Address</h3>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Street Address</label>
                                <input className="form-control" type="text" id='street' name='street' onChange={handleChange} value={formData.street}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Country</label>
                                <input className="form-control" type="text" id='country' name='country' onChange={handleChange} value={formData.country}/>  
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Province</label>
                                <input className="form-control" type="text" id='province' name='province' onChange={handleChange} value={formData.province}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>City</label>
                                <input className="form-control" type="text" id='city' name='city' onChange={handleChange} value={formData.city}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input className="form-control" type="text" id='postalCode' name='postalCode' onChange={handleChange} value={formData.postalCode}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Legacy ID</label>
                                <input className="form-control" type="text" id='legacyId' name='legacyId' onChange={handleChange} value={formData.legacyId}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Area Size</label>
                                <input className="form-control" type="text" id='areaSize' name='areaSize' onChange={handleChange} value={formData.areaSize}/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Region</label>
                                <input className="form-control" type="text" id='region' name='region' onChange={handleChange} value={formData.region}/>
                            </div>
                        </div>
                        <div className="col-12  ">
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control" rows="5" id='dscrpton' name='dscrpton' onChange={handleChange} value={formData.dscrpton}></textarea>
                            </div>
                        </div>
                    </div>

                    <hr className="splitCard"/>

                    <h3 className="sectionTitle">Building Contact (Optional)</h3>
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Contact</label>
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="text"/>
                            </div>
                        </div>
                        {/* <!-- <div className="col-12 col-md-4 col-lg-3">
                            <div className="form-group">
                                <label>PM Email</label>
                                <input className="form-control" type="text">
                            </div>
                        </div> --> */}
                    </div>

                    <button className="myBtn" type='submit'>{(props.data == 'Edit Building')?'Save':'Add'}  Building</button>
                    <a className="myBtn bdr" href="buildingList.html">Cancel</a>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Building

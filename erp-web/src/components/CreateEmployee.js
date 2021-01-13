import React from 'react'
import './CreateEmployee.css'

function CreateEmployee() {
     return (
          <div className="container">
               <div className="new-employee-header">
                    <h2>Create New Employee</h2>
               </div>
               <form className="form-create-employee" enctype="multipart/form-data">
                    <div className="primary-info">
                         <label for="fname">First Name</label>
                         <input type="text" name="first-name" id="blah" value="First Name"></input>
                         <label for="lname">Last Name</label>
                         <input type="text" name="last-name" id="blah" value="Last Name"></input>
                         <label for="email">Email</label>
                         <input type="text" name="email" id="blah" value="email"></input>
                         <label for="phone">Phone</label>
                         <input type="text" name="phone" id="blah" value="phone"></input>
                         <label for="phone">Profile Picture</label>
                         <input type="file" name="fileToUpload" id="blah"></input>
                    </div>
                    <div className="shared-info">
                         <label for="country">Country</label>
                         <select name="country" id="blah">
                              <option value="Lebanon">Lebanon</option>
                              <option value="Dubai">Dubai</option>
                              <option value="Canada">Canada</option>
                              <option value="London">London</option>
                         </select>
                         <label for="department">Department</label>
                         <select name="department" id="blah">
                              <option value="Lebanon">Marketing</option>
                              <option value="Dubai">Sales</option>
                              <option value="Canada">Development</option>
                              <option value="London">Customer Supprt</option>
                         </select>
                         <label for="team">Team</label>
                         <select name="team" id="blah">
                              <option value="Lebanon">Team 1</option>
                              <option value="Dubai">Team 2</option>
                              <option value="Canada">Team 3</option>
                              <option value="London">Team 4</option>
                         </select>
                    </div>
                    <div className="buttons">
                         <button className="btn" id="save" name="save">Save</button>
                         <button className="btn" id="clear" name="clear">Clear</button>
                         <button className="btn" id="cancel" name="cancel">Cancel</button>
                    </div>
               </form>
          </div >
     )
}

export default CreateEmployee

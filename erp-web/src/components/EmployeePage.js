import React from 'react'
import './EmployeePage.css'

function EmployeePage() {
     return (
          <div className="wrapper">
               <div className="employee-header">
                    <div className="employee-info">
                         <img src={require("../assets/images/avatar.webp").default} alt="user icon"></img>
                         <p className="employee-name">Maher Halawi</p>
                         <p className="employee-position">Lead Dev</p>
                    </div>
                    <div className="emp-teams">
                         <select className="team-selector">
                              <option value="0">Select Team:</option>
                              <option value="1">Team 1</option>
                              <option value="2">Team 2</option>
                              <option value="2">Team 3</option>
                              <option value="2">Team 4</option>
                         </select>
                         <select className="team-selector">
                              <option value="0">Select Team:</option>
                              <option value="1">Team 1</option>
                              <option value="2">Team 2</option>
                              <option value="2">Team 3</option>
                              <option value="2">Team 4</option>
                         </select>
                         <select className="project-selector">
                              <option value="0">Select Project:</option>
                              <option value="1">Project 1</option>
                              <option value="2">Project 2</option>
                              <option value="2">Project 3</option>
                              <option value="2">Project 4</option>
                         </select>
                    </div>
               </div>
               <div className="employee-details">
                    <div className="section-title">
                         <h1>Personal Info</h1>
                    </div>
                    <div className="section-details">
                         <label for="first-name" id="first-name">First Name</label>
                         <input type="text" name="first-name" id="first-name" value="Maher" disabled />
                         <label for="last-name" id="last-name">Last Name</label>
                         <input type="text" name="last-name" id="last-name" value="Halawi" disabled />
                         <label for="email" id="email">Email</label>
                         <input type="text" name="email" id="email" value="example@email.com" disabled />
                         <label for="phone" id="phone">Phone</label>
                         <input type="text" name="phone" id="phone" value="+0000000" disabled />
                         <label for="Address 1" id="Address 1">Address 1</label>
                         <input type="text" name="Address 1" id="Address 1" value="Beirut" disabled />
                         <label for="Address 2" id="Address 2">Address 2</label>
                         <input type="text" name="Address 2" id="Address 2" value="Beirut" disabled />
                    </div>
               </div>
               <div className="employee-details">
                    <div className="section-title">
                         <h1>Work Info</h1>
                    </div>
                    <div className="section-details">
                         <label for="department" id="department">Department</label>
                         <input type="text" name="department" id="department" value="development" disabled />
                         <label for="country" id="country">Country</label>
                         <input type="text" name="country" id="country" value="Lebanon" disabled />
                         <label for="date-hired" id="date-hired">Date Hired</label>
                         <input type="text" name="date-hired" id="date-hired" value="01/01/2020" disabled />
                         <label for="days-off" id="days-off">Vacation Days Remainnig</label>
                         <input type="text" name="days-off" id="days-off" value="13" disabled />
                         <label for="salary-range" id="salary-range">Salary-range</label>
                         <input type="text" name="salary-range" id="salary-range" value="B" disabled />
                         <label for="next-evaluation" id="next-evaluation">Next Evaluation</label>
                         <input type="text" name="next-evaluation" id="next-evaluation" value="01/01/2021" disabled />
                    </div>
               </div>
               <div className="employee-details">
                    <div className="section-title">
                         <h1>Performance Metrics</h1>
                    </div>
                    <div className="performance-details">
                         <label for="first-kpi" id="first-kpi">First KPI</label>
                         <input type="text" name="first-kpi" id="first-kpi" value="2" disabled />
                         <input type="text" name="prev-first-kpi" id="prev-first-kpi" value="2" disabled />
                         <label for="second-kpi" id="second-kpi">Second KPI</label>
                         <input type="text" name="second-kpi" id="second-kpi" value="3" disabled />
                         <input type="text" name="prev-second-kpi" id="prev-second-kpi" value="3" disabled />
                    </div>
               </div>
          </div>
     )
}

export default EmployeePage

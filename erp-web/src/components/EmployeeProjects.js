import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

function EmployeeProjects() {

     const [project, setReport] = useState([]);

     const projectReport = async () => {
          await fetch("http://localhost:8000/api/projects", {
               method: 'GET',
               headers: { 'Authorization': 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0' }
          })
               .then((res) => res.json())
               .then(
                    (result) => {
                         setReport(result);
                         // console.log(result)
                    },
                    (error) => {
                         console.log(error);
                    }
               );
     };
     useEffect(() => {
          projectReport();
     }, []);

     console.log(project)


     return (
          <div>
               <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                         <tr>
                              <th>KPI Name</th>
                              <th>Min</th>
                              <th>Max</th>
                              <th>Description</th>
                         </tr>
                    </thead>
                    {project.map((post) =>
                         <tbody>
                              <tr>
                                   <td>{post.name}</td>
                                   <td>{post.min_value}</td>
                                   <td>{post.max_value}</td>
                                   <td>{post.description}</td>
                              </tr>
                              <tr></tr>
                         </tbody>
                    )}
               </Table>
          </div>
     )
}

export default EmployeeProjects

import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

function EmployeeProjects() {

     const [report, setReport] = useState([]);

     const projectReport = async () => {
          await fetch("http://localhost:8000/api/kpis", {
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

     console.log(report)


     return (
          <div>
               <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                         <tr>
                              <th>Employee Name</th>
                              <th>Old Evaluation</th>
                              <th>New Evaluation</th>
                              <th>Change</th>
                         </tr>
                    </thead>
                    {report.map((post, key) => (
            <tbody key={key}>
              <tr key={key}>
                <td> {post.employees.first_name}  {post.employees.last_name}</td>
                <td>{post.Kpi.map((kpi) =>kpi.is_current === 0 ? kpi.evaluation : '')}</td>
                <td>{post.Kpi.map((kpi) =>kpi.is_current === 1 ? kpi.evaluation : '')}</td>
                <td>{post.Kpi.map((kpi) =>{
                     Kpi.is_current == 0 && Kpi
                     {oldEval > 0 && newEval > 0 ? (oldEval - newEval) / 100 : ''}}
                     )}</td>
              </tr>
              <tr></tr>
            </tbody>
        ))}
               </Table>
          </div>
     )
}

export default EmployeeProjects

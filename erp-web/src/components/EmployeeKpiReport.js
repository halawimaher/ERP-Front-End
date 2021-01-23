import React, { useEffect, useState } from 'react'
import {
     Button,
     Card,
     CardHeader,
     CardBody,
     CardFooter,
     Table,
     CardText,
     FormGroup,
     Form,
     Input,
     Row,
     Col,
   } from 'reactstrap';

function EmployeeKpiReports() {

     const [report, setReport] = useState([]);
     const [kpi, setKPI] = useState([]);

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

     const getKPI = () => {
          fetch('http://localhost:8000/api/kpis', {
            method: 'GET',
            headers: {
              Authorization:
                'bearer ' +
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0',
            },
          })
            .then((res) => res.json())
            .then(
              (result) => {
                setKPI(result.sort((a,b) => a.employee_id - b.employee_id) );
                console.log(result)
              },
              (error) => {
                console.log(error);
              }
            );
        };

        const handleClick = (e) => {
          e.preventDefault()
          fetch('http://localhost:8000/api/kpis', {
            method: 'GET',
            headers: {
              Authorization:
                'bearer ' +
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0',
            },
          })
            .then((res) => res.json())
            .then(
              (result) => {
                setKPI(result.sort((a,b) => a.created - b.created) );
                console.log(result)
              },
              (error) => {
                console.log(error); 
              }
            );
        }

     useEffect(() => {
          projectReport();
               getKPI();
     }, []);

     console.log(kpi)


     return (
          <div>
              <Table className='tablesorter' responsive>
        <thead className='text-primary'>
          <tr>
          <th>Employee Name</th>
            <th>KPI Name</th>
            <th>Min</th>
            <th>Max</th>
            <th>Created On</th>
            <th>Evaluation</th>
          </tr>
        </thead>
        {kpi.map((post, key) => (
             post.is_current=== 1 ?
           <tbody key={key}>

              <tr key={key}>
              <td>{post.employee.first_name}</td>
                <td> {post.name}</td>
                <td>{post.min_value}</td>
                <td>{post.max_value}</td>
                <td>{post.created}</td>                
                <td>{post.evaluation}</td>
              </tr>
              <tr></tr>

            </tbody>: null
        ))}
      </Table>
      <Button className='p-md-2' md='3' color='warning' type='submit' onClick={handleClick} />
      <Button className='p-md-2' md='3' color='warning' type='submit' />
      <Button className='p-md-2' md='3' color='warning' type='submit' />
          </div>
     )
}

export default EmployeeKpiReports

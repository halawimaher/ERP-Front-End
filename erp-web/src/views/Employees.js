import React from "react";
import { useEffect, useState } from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";

function Employees() {

  const [employee, setEmployee] = useState([]);

  const getEmployees = async () => {
    await fetch("http://localhost:8000/api/employees", {
      method: 'GET',
      headers: { 'Authorization': 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0' }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setEmployee(result);
          // console.log(result)
        },
        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    getEmployees();
  }, []);

  console.log(employee)

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h3 className="title">All Employees</h3>
                <h5 className="category">
                  Click on employee card for more info
                </h5>
              </CardHeader>
              <CardBody className="all-icons">
                <Row>
                  {employee.map((post, key) =>
                    <Col
                     key={key}
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="2"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <img
                          alt="..."
                          className="avatar"
                          src={`http://localhost:8000/storage/${post.employee.image_path}`}
                        />
                        <a href= {`/admin/profile/${post.employee.id}`}>
                          <p>{post.employee.first_name}  {post.employee.last_name} </p>
                      </a>
                      </div>
                    </Col>
                  )}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Button className='mr-5 ml-5' outline color="primary" size="md">
          New Staff Member
                </Button>
      </div>
    </>
  );
}

export default Employees;

import React from "react";
import { useEffect, useState } from 'react';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col, Button } from "reactstrap";

function Employees() {

  const [employee, setEmployee] = useState([]);

  const getEmployees = async () => {
    await fetch("http://localhost:8000/api/employees", {
      method: 'GET',
      headers: { 'Authorization': 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDUzNDYyMCwiZXhwIjoxNjEwNTM4MjIwLCJuYmYiOjE2MTA1MzQ2MjAsImp0aSI6IllQaXdBTE8xbHYyTGtFc20iLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.XZSsNRJt2WwveGZPj07JXzt5wZbPchOvt76VwBQ96pI' }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setEmployee(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    getEmployees();
  }, []);

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
                  {employee.map((post) =>
                    <Col
                      className="font-icon-list col-xs-6 col-xs-6"
                      lg="2"
                      md="3"
                      sm="4"
                    >
                      <div className="font-icon-detail">
                        <img
                          alt="..."
                          className="avatar"
                          src={require("assets/img/avatar.webp").default}
                        />
                        <a href="/">
                          <p>{post.first_name}  {post.last_name} </p></a>
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

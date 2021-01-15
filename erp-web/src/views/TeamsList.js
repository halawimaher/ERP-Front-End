import React from "react";
import { useEffect, useState } from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  CardFooter,
  Button
} from "reactstrap";

function Teams() {

  const [team, setTeam] = useState([]);

  const getTeams = () => {
    fetch("http://localhost:8000/api/teams", {
      method: 'GET',
      headers: { 'Authorization': 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDUzNDYyMCwiZXhwIjoxNjEwNTM4MjIwLCJuYmYiOjE2MTA1MzQ2MjAsImp0aSI6IllQaXdBTE8xbHYyTGtFc20iLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.XZSsNRJt2WwveGZPj07JXzt5wZbPchOvt76VwBQ96pI' }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setTeam(result);
          // console.log('teams', result);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    getTeams();
  }, []);

  console.log(team);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h3 className="title">Teams</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>New</label>
                        <Input
                          placeholder="add team..."
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="secondary" type="submit">
                  Add New
                                   </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Team: MnM</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Assigned Employees</th>
                      <th>Project</th>
                      <th>Role</th>
                      <th className="text-center">Manager</th>
                    </tr>
                  </thead>
                  {team.map((post) =>
                    <tbody>
                      <tr>
                        <td>{post.name}</td>
                        <td>ERP Dash Board</td>
                        <td>Full Stack</td>
                        <td className="text-center">Hasan Awad</td>
                      </tr>
                    </tbody>
                  )}
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Teams;

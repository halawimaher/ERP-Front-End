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

function Projects() {
  const [project, setProject] = useState([]);

  const getProjects = async () => {
    await fetch("http://localhost:8000/api/projects", {
      method: 'GET',
      headers: { 'Authorization': 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0' }
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setProject(result);
          // console.log(result)
        },
        (error) => {
          console.log(error);
        }
      );
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h3 className="title">Projects</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>New</label>
                        <Input
                          placeholder="add project..."
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
                      <th>Project Name</th>
                      <th>Team</th>
                      <th>Role</th>
                      <th className="text-center">Manager</th>
                    </tr>
                  </thead>
                  {project.map((post, key) =>
                    <tbody key={post.id}>
                      <tr>
                        <td>{post.name}</td>
                        {/* <td></td>
                        <td>{post.role_id}</td>
                        <td className="text-center">{post.manager_id}</td> */}
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

export default Projects;

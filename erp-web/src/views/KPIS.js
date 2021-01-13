import React from 'react'

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
} from "reactstrap";

function KPIS() {
     return (
          <div className="content">
               <Row>
                    <Col md="8">
                         <Card>
                              <CardHeader>
                                   <h3 className="title">Key Performance Metrics</h3>
                              </CardHeader>
                              <CardBody>
                                   <Form>
                                        <Row>
                                             <Col className="pr-md-1" md="5">
                                                  <FormGroup>
                                                       <label>New</label>
                                                       <Input
                                                            placeholder="add kpi..."
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
               <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                         <tr>
                              <th>KPI Name</th>
                              <th>Min</th>
                              <th>Max</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <td>Performance</td>
                              <td>1</td>
                              <td>5</td>
                         </tr>
                         <tr>
                              <td>Github</td>
                              <td>1</td>
                              <td>5</td>
                         </tr>
                         <tr></tr>
                    </tbody>
               </Table>
          </div>
     )
}

export default KPIS

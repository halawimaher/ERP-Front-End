import React, { useState } from 'react'

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
     Dropdown,
     DropdownToggle,
     DropdownMenu,
     DropdownItem
} from "reactstrap";

function KPIS() {
     const [dropdownOpen, setDropdownOpen] = useState(false);

     const toggle = () => setDropdownOpen(prevState => !prevState);

     return (
          <div className="content">
               <Row>
                    <Col md="8">
                         <Card>
                              <CardHeader>
                                   <h3 className="title">Company Reports</h3>
                              </CardHeader>
                              <CardBody>
                                   <Form>
                                        <Row>
                                             <Col className="pr-md-1" md="5">
                                                  <FormGroup>
                                                       <label>New</label>
                                                       <Input
                                                            placeholder="Report Name"
                                                            type="text"
                                                       />
                                                       <label>Fields</label>
                                                       <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                                            <DropdownToggle caret>
                                                                 Select Field
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                 <DropdownItem header>Employees</DropdownItem>
                                                                 <DropdownItem divider />
                                                                 <DropdownItem>Employee Name</DropdownItem>
                                                                 <DropdownItem>Employee Start Date</DropdownItem>
                                                                 <DropdownItem>Employee Position</DropdownItem>
                                                                 <DropdownItem header>KPIs</DropdownItem>
                                                                 <DropdownItem divider />
                                                                 <DropdownItem>Performance</DropdownItem>
                                                                 <DropdownItem>Github</DropdownItem>
                                                                 <DropdownItem>Whatever</DropdownItem>
                                                                 <DropdownItem header>Department</DropdownItem>
                                                                 <DropdownItem divider />
                                                                 <DropdownItem>Marketing</DropdownItem>
                                                                 <DropdownItem>Development</DropdownItem>
                                                                 <DropdownItem>Finance</DropdownItem>
                                                            </DropdownMenu>
                                                            <Button className="bg-info clearfix" style={{ padding: '.5rem', margin: '.5rem' }}>+</Button>
                                                       </Dropdown>
                                                  </FormGroup>
                                             </Col>
                                        </Row>
                                   </Form>
                              </CardBody>
                              <CardFooter>
                                   <Button className="btn-fill" color="secondary" type="submit">
                                        Run Report
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

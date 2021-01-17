import React, { useState } from 'react'
import EmployeeProjects from '../components/EmployeeProjects'

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

function Reports() {
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
                                                       <label>Select Report</label>
                                                       <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                                                            <DropdownToggle caret>
                                                                 Select Report
                                                            </DropdownToggle>
                                                            <DropdownMenu>
                                                                 <DropdownItem >Overall KPIs</DropdownItem>
                                                                 <DropdownItem divider />
                                                                 <DropdownItem>KPI Change</DropdownItem>
                                                                 <DropdownItem divider />
                                                                 <DropdownItem>Employee Projects</DropdownItem>
                                                            </DropdownMenu>
                                                            <Button className="btn-fill" color="secondary" type="submit">
                                                                 Run Report
                                                            </Button>
                                                       </Dropdown>
                                                  </FormGroup>
                                             </Col>
                                        </Row>
                                   </Form>
                              </CardBody>
                         </Card>
                    </Col>
               </Row>
               <EmployeeProjects />
          </div>
     )
}

export default Reports

import React, { useState } from 'react'
import EmployeeKpiReports from '../components/EmployeeKpiReport'
import EmployeeProjects from '../components/EmployeeProjects'
import EvaluatedKpi from '../components/EvaluatedKpi'

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
     const [option, setOption] = useState(0)

     const handleClick = (e) => {
          e.preventDefault()
          setOption(0)
     }

     const toggleClick = (e) =>{
          e.preventDefault()
          setOption(1)
     }

     const evaluate = (e) => {
          e.preventDefault()
          setOption(2)
     }

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
                                                                 <DropdownItem onClick={toggleClick} >Overall KPIs</DropdownItem>
                                                                 <DropdownItem divider />
                                                                 <DropdownItem onClick={handleClick}>Employee Projects</DropdownItem>
                                                            </DropdownMenu>
                                                            <Button className="btn-fill" color="secondary" onClick={evaluate}>
                                                                 Evaluate
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
               {option == 0 ? <EmployeeProjects /> : option == 1 ? <EmployeeKpiReports /> : <EvaluatedKpi /> }
          </div>
     )
}

export default Reports

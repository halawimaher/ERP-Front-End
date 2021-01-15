import React from "react";

// reactstrap components
import {
     Button,
     Card,
     CardHeader,
     CardBody,
     CardFooter,
     CardText,
     FormGroup,
     Form,
     Input,
     Row,
     Col,
} from "reactstrap";

function CreateUser() {


     return (
          <>
               <div className="content">
                    <Row>
                         <Col md="8">
                              <Card>
                                   <CardHeader>
                                        <h3 className="title">Member Profile</h3>
                                   </CardHeader>
                                   <CardBody>
                                        <Form>
                                             <Row>
                                                  <Col className="pr-md-1" md="5">
                                                       <FormGroup>
                                                            <label>Department</label>
                                                            <Input
                                                                 placeholder="department"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="pr-md-1" md="5">
                                                       <FormGroup>
                                                            <label>Position</label>
                                                            <Input
                                                                 placeholder="position"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="px-md-1" md="3">
                                                       <FormGroup>
                                                            <label>Username</label>
                                                            <Input
                                                                 placeholder="Username"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="pl-md-1" md="4">
                                                       <FormGroup>
                                                            <label htmlFor="exampleInputEmail1">
                                                                 Email address
                        </label>
                                                            <Input placeholder="mhalawi@email.com" type="email" />
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                             <Row>
                                                  <Col className="pr-md-1" md="6">
                                                       <FormGroup>
                                                            <label>First Name</label>
                                                            <Input
                                                                 placeholder="Name"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="pl-md-1" md="6">
                                                       <FormGroup>
                                                            <label>Last Name</label>
                                                            <Input
                                                                 placeholder="Last Name"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                             <Row>
                                                  <Col md="12">
                                                       <FormGroup>
                                                            <label>Address</label>
                                                            <Input
                                                                 placeholder="Home Address"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                             <Row>
                                                  <Col className="pr-md-1" md="4">
                                                       <FormGroup>
                                                            <label>City</label>
                                                            <Input
                                                                 placeholder="City"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="px-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Country</label>
                                                            <Input
                                                                 placeholder="Country"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="pl-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Phone</label>
                                                            <Input placeholder="phone" type="number" />
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                             <Row>
                                                  <Col className="pr-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Team 1</label>
                                                            <Input
                                                                 placeholder="Team"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="px-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Team 2</label>
                                                            <Input
                                                                 placeholder="Team"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                             <Row>
                                                  <Col className="pr-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Project</label>
                                                            <Input
                                                                 placeholder="Project"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="px-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Manager</label>
                                                            <Input
                                                                 placeholder="Manager"
                                                                 type="text"
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                             <Row>
                                                  <Col md="8">
                                                  </Col>
                                             </Row>
                                        </Form>
                                   </CardBody>
                              </Card>
                         </Col>
                         <Col md="4">
                              <Card className="card-user">
                                   <CardBody>
                                        <CardText />
                                        <div className="author">
                                             <div className="block block-one" />
                                             <div className="block block-two" />
                                             <div className="block block-three" />
                                             <div className="block block-four" />
                                             <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                  <img
                                                       alt="..."
                                                       className="avatar"
                                                       src={require("assets/img/avatar.webp").default}
                                                  />
                                                  <h5 className="title">Maher Halawi</h5>
                                             </a>
                                             <p className="description">Lead Dev</p>
                                        </div>
                                   </CardBody>
                                   <CardFooter>
                                        <div className="button-container">
                                             <Button className="btn-icon btn-round" color="twitter">
                                                  <i class="fas fa-chart-bar"></i>
                                             </Button>
                                             <Button className="btn-icon btn-round" color="twitter">
                                                  <i class="fas fa-info-circle"></i>
                                             </Button>
                                             <Button className="btn-icon btn-round" color="twitter">
                                                  <i class="fas fa-users-cog"></i>
                                             </Button>
                                        </div>
                                   </CardFooter>
                              </Card>
                         </Col>
                    </Row>
               </div>
          </>
     );
}

export default CreateUser;

import React, { useEffect, useState } from "react";

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

function UserProfile() {

     const piece = window.document.location.pathname;
     const id = piece.split("/")[3]
     
     const [employee, setEmployee] = useState({employee: '', team: [], project: []});
     const [newTeam, gatherTeams] = useState({});
     const [team, setTeams] = useState([])
     const [project, setProjects] = useState([])

     const createTeam =  (e) => {
          fetch('http://localhost:8000/api/assign', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
                 'Authorization':
                   'bearer ' +
                   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0'
               },
               body: JSON.stringify({...newTeam }),
          }).then(
              (result) => {
               window.location.reload();
          });
     };

     const onChange = (e) => {
          gatherTeams({
            ...newTeam, 
            employee_id: id,
            [e.target.name]: e.target.value,
        });
        };
     
     const getEmployees = async () => {
          let url = 'http://localhost:8000/api/employees/'
          url += id
       await fetch(url, {
         method: 'GET',
         headers: { 'Authorization': 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0' }
       }, )
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

     const getTeams = async () => {
          fetch('http://localhost:8000/api/teams', {
         method: 'GET',
         headers: { 'Authorization': 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0' }
       }, )
         .then((res) => res.json())
         .then(
           (result) => {
             setTeams(result);
           },
           (error) => {
             console.log(error);
           }
         );
     };

     const GetProjects = async () => {
          fetch('http://localhost:8000/api/projects', {
         method: 'GET',
         headers: { 'Authorization': 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0' }
       }, )
         .then((res) => res.json())
         .then(
           (result) => {
             setProjects(result);
           },
           (error) => {
             console.log(error);
           }
         );
     };

     useEffect(() => {
       getEmployees()
       getTeams()
       GetProjects()
     }, []);

console.log(employee)

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
                                                            <label>First Name</label>
                                                            <Input
                                                                 className="text-white"
                                                                 placeholder="First Name"
                                                                 type="text"
                                                                 value={employee.employee.first_name}               
                                                                 disabled                                                  
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="pr-md-1" md="5">
                                                       <FormGroup>
                                                            <label>Last Name</label>
                                                            <Input
                                                                 className="text-white"
                                                                 placeholder="Last Name"
                                                                 type="text"
                                                                 value={employee.employee.last_name}       
                                                                 disabled                                                          
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="px-md-1" md="3">
                                                       <FormGroup>
                                                            <label>Username</label>
                                                            <Input className="text-white"
                                                                 placeholder="Username"
                                                                 type="text"
                                                                 value={employee.employee.username}   
                                                                 disabled                                                              
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="pl-md-1" md="4">
                                                       <FormGroup>
                                                            <label htmlFor="exampleInputEmail1">
                                                                 Email address
                        </label>
                                                            <Input className="text-white" placeholder="mhalawi@email.com" type="email" value={employee.employee.email} disabled/>
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                             <Row>
                                                  <Col md="12">
                                                       <FormGroup>
                                                            <label>Address</label>
                                                            <Input className="text-white"
                                                                 placeholder="Home Address"
                                                                 type="text"
                                                                 value={employee.employee.address}                 
                                                                 disabled                                                
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                             <Row>
                                                  <Col className="pr-md-1" md="4">
                                                       <FormGroup>
                                                            <label>City</label>
                                                            <Input className="text-white"
                                                                 placeholder="City"
                                                                 type="text"
                                                                 value={employee.employee.city}               
                                                                 disabled                                                  
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="px-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Country</label>
                                                            <Input className="text-white"
                                                                 placeholder="Country"
                                                                 type="text"
                                                                 value={employee.employee.country}          
                                                                 disabled                                                       
                                                            />
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="pl-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Phone</label>
                                                            <Input className="text-white" placeholder="phone" type="number" value={employee.employee.phone} disabled/>
                                                       </FormGroup>
                                                  </Col>
                                             </Row>
                                             <Row>
                                                  <Col className="pr-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Team   </label>
                                                            <Input type="select" name="team_id" 
                                                            value={team.team_id}
                                                            onChange={onChange}
                                                            id="exampleSelect">
                                                                 {team.map((item, key) => 
                                                                   <option key={item.id} value={item.id}>{item.name}</option>
                                                                 )}
                                                                 </Input>
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="px-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Project  </label>
                                                            <Input type="select" name="project_id" 
                                                            value={project.project_id} 
                                                            onChange={onChange}
                                                            id="exampleSelect">
                                                       {project.map((item, key) => 
                                                         <option key={item.id} value={item.id}>{item.name}</option>
                                                       )}
                                                       </Input>
                                                       </FormGroup>
                                                  </Col>
                                                  <Col className="px-md-1" md="4">
                                                       <FormGroup>
                                                            <label>Role</label>
                                                            <Input className="text-white" name="role" type="text"  
                                                            value={newTeam.role}  
                                                            onChange={onChange}
                                                            required
                                                            /> 
                                                       <Button onClick={createTeam}>Add</Button>
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
                                                  <img
                                                       alt="user avatar"
                                                       className="avatar"
                                                       src={`http://localhost:8000/storage/${employee.employee.image_path}`}
                                                  />
                                        </div>
                                   </CardBody>
                                   <CardFooter>
                                        <div className="button-container">
                                             <Button className="btn-icon btn-round" color="twitter">
                                                  <i className="fas fa-chart-bar"></i>
                                             </Button>
                                             <Button className="btn-icon btn-round" color="twitter">
                                                  <i className="fas fa-info-circle"></i>
                                             </Button>
                                             <Button className="btn-icon btn-round" color="twitter">
                                                  <i className="fas fa-users-cog"></i>
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

export default UserProfile;

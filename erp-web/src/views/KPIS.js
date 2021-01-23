import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import axios from 'axios';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from 'reactstrap';

import Pagination from "react-js-pagination";

function KPIS(props) {

  
  const [kpi, setKPI] = useState([]);
  const [newKpi, addKPI] = useState({});
  const [oldKpi, removeKPI] = useState([]);

  const getKPI = () => {
    fetch('http://localhost:8000/api/kpis', {
      method: 'GET',
      headers: {
        Authorization:
          'bearer ' +
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setKPI(result.sort((a,b) => a.created - b.created) );
          console.log(result)
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const addKpi = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/kpis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':
          'bearer ' +
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0'
      },
      body: JSON.stringify({...newKpi }),
    }).then((result) => {
      window.location.reload();
    });
  };
  const onChange = (e) => {
    e.persist();
    addKPI({
      ...newKpi,
      [e.target.name]: e.target.value,
  });
  };

  const deleteKPI = (id) => {
    fetch(
      `http://localhost:8000/api/kpis/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization:
            'bearer ' +
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYxMDcxMzI3OSwiZXhwIjoxNjEwNzE2ODc5LCJuYmYiOjE2MTA3MTMyNzksImp0aSI6IkFxbFU2c2ZBNmU1WU9RYTgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.gMVjvzsIRnVc-xxGhpfzIce_DxMZ2C6j0IIZgoqrUY0',
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          removeKPI(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  

  useEffect(() => {
    getKPI();
  }, []);


  return (
    <div className='content'>
      <Row>
        <Col md='8'>
          <Card>
            <CardHeader>
              <h3 className='title'>
                Key Performance Metrics
              </h3>
              <Row>
                <CardHeader>
                  <Button
                    className='btn-fill'
                    color='secondary'
                    type='submit'
                    onClick={addKpi}
                  >
                    Add New
                  </Button>
                </CardHeader>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col className='pr-md-1' md='5'>
                    <FormGroup>
                      <label>Name</label>
                      <Input
                        placeholder='KPI Name'
                        type='text'
                        name='name'
                        value={newKpi.name}
                        onChange= {onChange}
                      />
                      <label>Minimum Value</label>
                      <Input
                        placeholder='0, 1....'
                        type='number'
                        name='min_value'
                        min='1'
                        value={newKpi.min_value}
                        onChange= {onChange}
                      />
                      <label>Maximum Value</label>
                      <Input
                        placeholder='5, 10...'
                        type='number'
                        name='max_value'
                        min='2'
                        value={newKpi.max_value}
                        onChange= {onChange}
                      />
                      <label>Description</label>
                      <Input
                        placeholder='Add a Description'
                        type='text'
                        name='description'
                        value={newKpi.description}
                        onChange= {onChange}
                      />
                                            {/* <Input
                        placeholder='Add a Description'
                        type='text'
                        name='employee_id'
                        value={newKpi.employee_id}
                        onChange= {onChange}
                      /> */}
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Table className='tablesorter' responsive>
        <thead className='text-primary'>
          <tr>
            <th>KPI Name</th>
            <th>Min</th>
            <th>Max</th>
            <th>Created On</th>
            <th>Description</th>
          </tr>
        </thead>
        {kpi.map((post, key) => (
            <tbody key={key}>
              <tr key={key}>
                <td> {post.name}</td>
                <td>{post.min_value}</td>
                <td>{post.max_value}</td>
                <td>{post.created}</td>
                <td>{post.description}</td>
                <td>
                  <Button className='p-md-2' md='3' color='warning' type='submit' onClick={deleteKPI}>
                    X
                  </Button>
                </td>
                <td>
                  <Button className='p-md-2' md='3' color='warning' type='submit'>
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
        ))}
      </Table>
    </div>
  );
}

export default KPIS;

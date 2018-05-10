import React, { Component } from 'react';
import {
  Jumbotron, Col, Container, Row
} from 'reactstrap';


class Dashboard extends Component {


  render() {

    return (
      <Row>
        <Col xs="12" sm="12" md="6">
          <img src = {require( "../../assets/img/firefoxios.png")} width={'90%'} className="centert"/>
        </Col>
        <Col xs="12" sm="12" md="6">
          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">Reporte sobre Mozilla Firefox iOS</h1>
              <p className="lead">Hallazgos en el código sobre técnicas de desempeño, manejo de conectividad eventual, almacenamiento y seguridad</p>

              <p> Por: <br/>
              Camila García <br/>
              Margarita Gómez</p>
            </Container>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}

export default Dashboard;

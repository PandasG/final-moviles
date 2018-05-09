import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Typography extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Performance</strong>
          </CardHeader>
          <CardBody>
            <Jumbotron>
              <p className="lead"> Para evaluar el desempeño de la aplicación se utiliza la herramienta New Relic.
              </p>
            </Jumbotron>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Typography;

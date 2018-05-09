import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Jumbotrons extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Storage Strategies</strong>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <p className="lead"> La aplicación utiliza SQLite para guardar todo tipo de información,
                    como bookmarks, history, tabs. SQLite es la capa que reside bajo CoreData. Esta información,
                    luego, se sincroniza con la información online en el bg. Por otro lado, también se utiliza
                    NSKeyedArchiver para llevar un archivo de pares de string-data.
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Jumbotrons;

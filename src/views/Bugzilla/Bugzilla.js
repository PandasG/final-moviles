import React, { Component } from 'react';
import YouTube from 'react-youtube';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import { Card, CardBody, CardHeader, Col, Row, Jumbotron, Container } from 'reactstrap';

class Bugzilla extends Component {

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div className="animated fadeIn body">
        <Row>
          <Col xs="12" sm="12" md="6">
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Bugzilla</h1>
                <p className="lead">Reporte de bugs</p>
              </Container>
            </Jumbotron>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="card-accent-secondary just">
              <CardHeader>
                <i className="fa fa-question " /> <strong>Qué es Bugzilla</strong>
              </CardHeader>
              <CardBody>
                Firefox para iOS es una aplicación open source, lo que significa que una parte muy importante de la
                misma es la comunidad que tiene detrás. Mozilla tiene una comunidad muy grande que colabora
                desarrollando gran parte de sus productos, y tiene por lo tanto varios canales de comunicación donde se
                pueden reportar bugs, encontrar documentación y noticias, entre otros. Estos incluyen la página principal
                del proyecto en github y un blog de developers con noticias y tutoriales. Una de las herramientas más
                importantes para el desarrollo de los productos es Bugzilla, una página donde se lleva constancia de
                todos los bugs reportados, su estado, y otra información relevante a los mismos.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-secondary just">
              <CardHeader>
                <i className="fa fa-bug" /> Bug resuelto
              </CardHeader>
              <CardBody>
                Escogimos {' '}
                <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1248993" target="_blank">un bug</a> {' '}
                marcado como resuelto para ver si podíamos encontrar la manera en la que se había arreglado en la
                aplicación. El bug llamaba a agregar un nuevo test de UI para probar una adición de un {' '}
                <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1246923" target="_blank">
                  bug anterior
                </a>,
                donde se inhabilitó el botón de editar cuando la lista de perfiles estaba vacía. Ambos bugs cuentan con
                el historial de comentarios donde se explica el bug y donde alguien decide hacerse cargo del mismo, y
                tiene los links que llevan a los pull requests donde se hizo el respectivo arreglo. Tras revisar en el
                código, encontramos que los dos arreglos estaban donde debían, y que funcionaban correctamente.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-secondary just">
              <CardHeader>
                <i className="fa fa-bug" /><i className="fa fa-star" /> Nuestro bug
              </CardHeader>
              <CardBody>
                Por otro lado, decidimos hacer el proceso de reportar uno de los bugs que encontramos. El proceso de
                reporte de bugs está debidamente documentado, con instrucciones detalladas para crear bugs que sean
                útiles. Es tan fácil como crear una cuenta en bugzilla y seguir los pasos indicados. El reporte del
                bug que creamos se puede encontrar públicamente en la {' '}
                <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1460457" target="_blank">
                  página de Bugzilla
                </a>. Al momento de escribir este
                reporte, el bug no ha sido confirmado, pero esperamos seguir su desenlace de ahora en adelante.
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Bugzilla;

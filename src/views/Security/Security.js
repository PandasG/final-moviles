import React, { Component } from 'react';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import { Card, CardBody, CardHeader, Col, Row, Jumbotron, Container } from 'reactstrap';

class Security extends Component {

  render() {
    return (
      <div className="animated fadeIn body">
        <Row>
          <Col xs="12" sm="12" md="6">
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Técnicas de seguridad</h1>
                <p className="lead">Autenticación, tests y librerías</p>
              </Container>
            </Jumbotron>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="card-accent-primary just">
              <CardHeader>
                <i className="fa fa-lightbulb-o " /> <strong>Estrategia de análisis</strong>
              </CardHeader>
              <CardBody>
                Para el análisis de seguridad se analizó el código cuidadosamente. Además, se utilizaron las comunidades
                online para encontrar posibles fallas de seguridad que se hubieran hecho públicas en el pasado. Por
                consejo de nuestro profesor asistente, Sergio, nos concentramos en encontrar las partes del código que
                o estuvieran escritas en Swift, pues, como nos explicó, Apple se enorgullece de la seguridad de este
                lenguaje y existen premios muy grandes, que no han sido reclamados, a quien encuentre alguna vulnerabilidad.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-primary just">
              <CardHeader>
                <i className="fa fa-id-card-o" /> Manejo de autenticación
              </CardHeader>
              <CardBody>
                Firefox hace uso de tokens de sesión para asegurarse de que el usuario está autenticado siempre que sea
                necesario. De esta manera, el acceso a información privilegiada, como favoritos, historial, y otros
                asociados a la cuenta personal solo puedan ser accedidos si el usuario apropiado se encuentra con la
                sesión iniciada. Esto se logra en combinación con el servidor, verificando que el usuario si esté
                loggeado en el cliente y que el token de sesión que se tiene sea válido y vigente cada vez que se trata
                de hacer un query de información privada.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-primary just">
              <CardHeader>
                <i className="fa fa-lock" /> Tests y otras precauciones
              </CardHeader>
              <CardBody>
                La aplicación, además, cuenta con tests de seguridad, que se encargan de probar posibles exploits de las
                sesiones utilizando los tokens generados para las mismas. Firefox evita que se pueda restaurar una
                sesión después de que esta se haya terminado cargando en una pestaña la página de restauración de manera
                local, y evita que se pueda forzar la página de error para así mismo evitar que el primer exploit pueda
                realizarse a través del segundo, utilizando la página de error para llegar a la página de restauración
                de sesión.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-primary just">
              <CardHeader>
                <i className="fa fa-file-code-o" /> Otros lenguajes y librerías
              </CardHeader>
              <CardBody>
                El único código en C en la aplicación es código de librerías de terceros, y algunos scripts locales que
                no tienen contacto con la información sensible de la aplicación, usados más que todo para generar
                información para tests. Las librerías incluyen KIF, un framework de testing, FxA, un framework de
                accounts desarrollado por Mozilla, y UIImageViewAligned, una sublcase de UIImage utilizada para alinear
                imágenes automáticamente. De estas, ninguna reporta ningún problema de seguridad. Dado que Apple ha
                hecho un gran esfuerzo por lograr que Swift sea un lenguaje con mínimas posibilidades de ataques y
                explotaciones, la aplicación es muy poco vulnerable.
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="12" md="6">
            <Card className="border-primary just">
              <CardHeader>
                <i className="fa fa-info-circle" /> Información sensible
              </CardHeader>
              <CardBody>
                FirefoxAccount.swift maneja la información que se considera “sensible” como por ejemplo, el ID de la
                cuenta, su configuración, el e-mail o el token de la sesión. La manera correcta de manejar esta
                información es guardarla en el iOS Keychain, en vez de bases de datos locales.
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Security;

import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Reachability extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-database" /> SQLite
              </CardHeader>
              <CardBody>
                La aplicación utiliza SCNetworkReachability, de la librería nativa System, para verificar si el
                dispositivo tiene conexión a internet (y además, el tipo de conexión, como WLAN o WiFi). Para esto,
                utilizan la la función SCNetworkReachabilitySetCallback, que monitorea un target específico para
                analizar su estado de conexión, y se crea un loop que lo revisa constantemente. Sin embargo, nos dimos
                cuenta de que aunque se crea una notificación en el NotificationCenter (ReachabilityStatusChanged), no
                hay ningún observador en la aplicación que esté esperando esta notificación. Por lo tanto, aunque tiene
                el potencial de darse cuenta del momento en que la conexión vuelve a establecerse, no se utiliza en
                ningún momento. Es curioso mencionar que para esta aplicación, se utiliza “google.com” para verificar
                la conexión.
                <br/><br/>
                <strong>
                  IMAGEN IMAGEN <br />
                  Sin embargo, esto significa que las herramientas tradicionales de perfilamiento para CoreData no
                  pueden ser utilizadas, como el instrumento de CoreData reads and writes. Por esta razón, la mayor parte
                  del análisis se hizo a mano, revisando cuidadosamente el código de la aplicación y utilizándola para
                  entender su comportamiento dadas las acciones de los usuarios, con logs, prints, y el instrumento de
                  TimeProfiler, que nos permitió ver, aunque vagamente, una parte del CallStack de la aplicación.
                </strong>
                <br /><br />
                Al instalar la aplicación, se crea un esquema de base de datos de SQLite que contiene la información
                que debe ser guardada localmente, como:
                <ul>
                  <li>Las pestañas abiertas</li>
                  <li>El historial</li>
                  <li>Los favoritos</li>
                  <li>Las descargas</li>
                  <li>La información de cuenta y de logins</li>
                  <li>La lista de lectura </li>
                </ul>
                Al momento de cambiar cualquiera de estas, por ejemplo, al momento de abrir una nueva pestaña o de
                marcar un sitio como favorito, esta tabla local se actualiza. Esto asegura que la información local
                no se pierda en ningún momento, aunque la aplicación se cierre o el dispositivo se apague.
                <br /><br />
                Esta información (a excepción de las descargas, que son locales y específicas del dispositivo, no
                de la cuenta) se sincroniza con la información online en el background, de estar loggeado a la cuenta.
                De no ser así, no es necesario sincronizar esta información con la nube, y permanece local. Existen
                las sincronizaciones automáticas, es decir, iniciadas por el sistema, y las manuales, es decir, las
                iniciadas por el usuario.
                <br /><br />
                Las sincronizaciones manuales se pueden iniciar desde el menú de ajustes de la aplicación:
                <strong>
                  IMAGEN IMAGEN <br />
                </strong>
                En este lugar se muestra la última sincronización realizada y se permite iniciar una nueva.
                <br/><br/>
                Las sincronizaciones automáticas ocurren de dos maneras diferentes: en primer lugar, cuando la
                aplicación se vuelve “activa”, y si la última sincronización ocurrió hace más de 15 minutos, se hace una
                sincronización de “apertura”, para ofrecer al usuario la información más actualizada de su cuenta. Esta
                sincronización ocurre en el Main Thread. Después de esto, se programa un Timer para que cada 15 minutos
                se intente sincronizar toda la información. Esto corre en un thread de background.
                <br/><br/>
                <strong>IMG IMG IMG</strong>
                <br/><br/>
                Todo esto está modularizado en diferentes clases que se encargan de sincronizar cada tipo de
                información. Todas heredan de la misma clase, Synchronizer, que permite saber el estado de la
                sincronización y maneja los posibles tipos de error que se den en el proceso.
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
                <br/><br/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-check "></i>Card with icon
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card>
              <CardHeader>
                Card with switch
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card>
              <CardHeader>
                Card with label
                <Badge color="success" className="float-right">Success</Badge>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card>
              <CardHeader>
                Card with label
                <Badge pill color="danger" className="float-right">42</Badge>
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Reachability;

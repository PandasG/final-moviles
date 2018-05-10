import React, { Component } from 'react';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import { Card, CardBody, CardHeader, Col, Row, Jumbotron, Container } from 'reactstrap';

class Storage extends Component {
  render() {
    return (
      <div className="animated fadeIn body">
        <Row>
          <Col xs="12" sm="12" md="6">
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Técnicas de almacenamiento</h1>
                <p className="lead">SQLite y sincronizaciones</p>
              </Container>
            </Jumbotron>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="card-accent-success just">
              <CardHeader>
                <i className="fa fa-lightbulb-o " /> <strong>Estrategia de análisis</strong>
              </CardHeader>
              <CardBody>
                Dado que las herramientas tradicionales de perfilamiento para CoreData no son utilizadas, como el
                instrumento reads and writes, el análisis de las técnicas utilizadas por la aplicación se hizo a mano
                en su mayor parte. Se revisó cuidadosamente el código de la aplicación para así
                entender su comportamiento dadas las acciones de los usuarios, usando logs, prints, y el instrumento de
                TimeProfiler, que nos permitió ver, aunque vagamente, una parte del CallStack de la aplicación.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-database" /> SQLite
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" md="6">
                    <br/>
                    La aplicación utiliza SQLite para guardar información, que es la capa que reside bajo CoreData. Teniendo
                    en cuenta la robustez de la aplicación y la gran cantidad de colaboradores con la que cuenta, hacer uso
                    de SQLite representa varios beneficios. Por un lado, las queries que permite realizar SQLite son mucho
                    más poderosas, y el formato, al no ser propietario, permite una replicación mucho más cercana del lado
                    del servidor. Por otro lado, SQLite, al ser la capa sobre la que funciona CoreData, está incluida en
                    las Core Libraries de iOS. <br/><br/>
                  </Col>
                  <Col xs="12" sm="12" md="6">
                    <img src={img1} />
                  </Col>
                </Row>

              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-tasks" /> Información almacenada
              </CardHeader>
              <CardBody>
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
                <br/>
                Esta información (a excepción de las descargas, que son locales y específicas del dispositivo, no
                de la cuenta) se sincroniza con la información online en el background, de estar loggeado a la cuenta.
                De no ser así, no es necesario sincronizar esta información con la nube, y permanece local. Existen
                las sincronizaciones automáticas, es decir, iniciadas por el sistema, y las manuales, es decir, las
                iniciadas por el usuario.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-refresh" /><i className="fa fa-hand-o-up" /> Sincronizaciones manuales
              </CardHeader>
              <CardBody>
                Las sincronizaciones manuales se pueden iniciar desde el menú de ajustes de la aplicación, donde se
                muestra la última sincronización realizada y se permite iniciar una nueva. <br/>
                <div>
                  <img className="centert" src={img2} width={'35%'}/>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-refresh fa-spin" /><i className="fa fa-cog fa-spin" /> Sincronizaciones automáticas
              </CardHeader>
              <CardBody>
                Las sincronizaciones automáticas ocurren de dos maneras diferentes: en primer lugar, cuando la
                aplicación se vuelve “activa”, y si la última sincronización ocurrió hace más de 15 minutos, se hace una
                sincronización de “apertura”, para ofrecer al usuario la información más actualizada de su cuenta. Esta
                sincronización ocurre en el Main Thread. Después de esto, se programa un Timer para que cada 15 minutos
                se intente sincronizar toda la información. Esto corre en un thread de background.
                <br/> <br/>
                <div>
                  <img className="centert" src={img3}/>
                </div>
                <br/><br/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-spinner fa-spin" />Synchronizer
              </CardHeader>
              <CardBody>
                Todo esto está modularizado en diferentes clases que se encargan de sincronizar cada tipo de
                información. Todas heredan de la misma clase, Synchronizer, que permite saber el estado de la
                sincronización y maneja los posibles tipos de error que se den en el proceso.
                <br/><br/>
                <div>
                  <img className="centert" src={img4}/>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Storage;

import React, { Component } from 'react';
import YouTube from 'react-youtube';
import img5 from '../../assets/img5.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import { Card, CardBody, CardHeader, Col, Row, Jumbotron, Container } from 'reactstrap';

class Reachability extends Component {

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
                <h1 className="display-3">Técnicas de manejo de conectividad eventual</h1>
                <p className="lead">Verificación de conexión, sincronizaciones y bugs</p>
              </Container>
            </Jumbotron>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="card-accent-success just">
              <CardHeader>
                <i className="fa fa-lightbulb-o " /> <strong>Estrategia de análisis</strong>
              </CardHeader>
              <CardBody>
                La mayor parte del análisis se hizo revisando meticulosamente el código y utilizando el logger para
                entender las acciones de los usuarios y su impacto en la aplicación. Principalmente, probamos las
                diferentes reacciones de la aplicación con y sin internet, y cómo reaccionaba a perder la conexión en la
                mitad de las funcionalidades principales. Finalmente, nos guiamos con la documentación de las librerías
                utilizadas para entender mejor su uso.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-google" /> Verificar conexión
              </CardHeader>
              <CardBody>
                    La aplicación utiliza SCNetworkReachability, de la librería nativa System, para verificar si el
                    dispositivo tiene conexión a internet (y además, el tipo de conexión, como WLAN o WiFi). Para esto,
                    utilizan la la función SCNetworkReachabilitySetCallback, que monitorea un target específico para
                    analizar su estado de conexión, y se crea un loop que lo revisa constantemente. Sin embargo, nos
                    dimos cuenta de que aunque se crea una notificación en el NotificationCenter
                    (ReachabilityStatusChanged), no hay ningún observador en la aplicación que esté esperando esta
                    notificación. Por lo tanto, aunque tiene el potencial de darse cuenta del momento en que la conexión
                    vuelve a establecerse, no se utiliza en ningún momento. Adicionalmente, se notó que para esta
                    aplicación, se utiliza “google.com” para verificar la conexión.

              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-refresh fa-spin" /><i className="fa fa-cog fa-spin" /> Sincronizaciones automáticas
              </CardHeader>
              <CardBody>
                En particular, conocer el estado de la red es importante para las sincronizaciones. En el caso de las
                sincronizaciones automáticas, el request es creado sin observar si hay o no conexión. La aplicación sólo
                se da cuenta de que no existe una conexión cuando esta petición falla. Ya que las sincronizaciones
                automáticas se encuentran en un loop, el sistema simplemente espera a que se repita la petición, y no
                espera ser avisado de una conexión.

                <br/><br/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-refresh" /><i className="fa fa-hand-o-up" /> Sincronizaciones manuales
              </CardHeader>
              <CardBody>
                Para el caso de las sincronizaciones manuales, el manejo es un poco diferente. Al entrar en la sección
                de ajustes, la aplicación pregunta por el estado de conexión. Si no hay conexión, la aplicación no
                permite hacer la sincronización manual. De lo contrario, si lo permite.
                <br/> <br/>
                <div>
                  <img className="centert" src={img5} width={'55%'}/>
                </div>
                <br/> <br/>
                <div>
                  <img className="centert" src={img6} width={'55%'}/>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-bug" /> Bug encontrado #1
              </CardHeader>
              <CardBody>
                Notamos que en la etapa de sincronizaciones manuales, si el internet se va después de que la vista ha
                sido cargada, no se cambia automáticamente. Entonces, es posible iniciar una sincronización manual a
                pesar de no tener conexión. Esto causa un comportamiento extraño. El botón de sincronizar se queda
                presionado, y la sincronización no ocurre. Hasta que no se recarga la vista, el botón no se deselecciona
                y muestra que no hay conexión.
                <br/><br/>
                <div>
                  <img className="centert" src={img7} width={'55%'}/>
                </div>
                <br/>
                Este error podría evitarse si se hiciera uso de la notificación de ReachabilityStatusChanged mencionada
                anteriormente, y se hiciera el cambio a la interfaz tan pronto la conexión se perdiera. También sería
                bueno que al volver, el botón estuviera disponible nuevamente sin necesidad de recargar la vista de ajustes.

              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-bug" /> Bug encontrado #2
              </CardHeader>
              <CardBody>
                Se detectó un bug extraño en el cual, a pesar de poder reconocer que no había conexión, en vez de
                mostrar la página que informa de esto, la aplicación no respondía a los clicks en las páginas
                <br/><br/>
                <YouTube
                  videoId="EbZScQH2ZOE"
                  opts={opts}
                  onReady={this._onReady}
                />
                <br/> <br/>
                Parece suceder después de cambiar de pestañas después de la primera vez que se detecta que no hay
                internet. En ocasiones, como en el video, la barra inferior desaparece y es imposible acceder a las tabs
                abiertas, ajustes, o información de la cuenta. La barra inferior desaparece tras tratar de recargar la
                página haciendo click en la barra de navegación y luego click en Go. En la sección de bugzilla hablamos
                del reporte que hicimos en la plataforma de este bug.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-success just">
              <CardHeader>
                <i className="fa fa-ban" /> Comportamiento en caso de no haber conexión
              </CardHeader>
              <CardBody>
                Para el caso del WebView en particular, firefox utiliza una librería de apple llamada WebKit. Al tratar
                de acceder a una página cuando no hay internet, la navegación se cancela y la vista predeterminada de
                error se presenta en el browser utilizando Webkit.

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Reachability;

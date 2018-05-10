import React, { Component } from 'react';
import img8 from '../../assets/img8.png';
import img9 from '../../assets/img9.png';
import img12 from '../../assets/img12.png';
import img13 from '../../assets/img13.png';
import img14 from '../../assets/img14.png';
import img15 from '../../assets/img15.png';
import { Card, CardBody, CardHeader, Col, Row, Jumbotron, Container, Table } from 'reactstrap';

class Performance extends Component {

  render() {
    return (
      <div className="animated fadeIn body">
        <Row>
          <Col xs="12" sm="12" md="6">
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Técnicas de desempeño</h1>
                <p className="lead">Hallazgos en el código, Codacy, Tracking Protection y Progressive Web Apps</p>
              </Container>
            </Jumbotron>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="card-accent-danger just">
              <CardHeader>
                <i className="fa fa-lightbulb-o " /> <strong>Estrategia de análisis</strong>
              </CardHeader>
              <CardBody>
                Para analizar este atributo de calidad se abordó de distintas maneras. Inicialmente, se utilizaron los
                Instruments de XCode, pero la información resultante estaba abarrotada con información que no era de
                ningún uso al punto que no pudimos extraer nada útil. Posteriormente, se decidió seguir con la técnica
                de analizar el código y las reacciones de la aplicación a las acciones del usuario, usando como guía la
                herramienta de debug predeterminada de XCode y tomando tiempos a mano. Para la toma de los tiempos,
                se descargó la última versión estable en dos celulares diferentes. Por otro lado, se usó la herramienta
                Codacy, que analiza repositorios de GitHub, y la herramienta New Relic, pero en esta última no se
                encontró información de interés.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-danger just">
              <CardHeader>
                <i className="fa fa-thumbs-o-down" /> Favicons innecesarios
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="12" md="6">
                    <img className="centert" src={img8} width={'35%'} />
                    <br/>
                    <img className="centert" src={img9} width={'60%'} />
                  </Col>
                  <Col xs="12" sm="12" md="6">
                    <br/>
                    Al realizar el análisis se encontró una mala práctica que consiste en guardar 197 png’s que
                    corresponden a los favicons de diferentes páginas famosas para ser usados en la vista de topsites de
                    la aplicación. Esto es bastante peculiar, ya que la aplicación se encarga de descargar, y guardar,
                    los favicons de los Top Sites de manera local, y está preparado para generar un ícono basado en la
                    primera letra del dominio y un color. Aunque solo ocupa cerca de 800KB, es bastante innecesario, y
                    ocupa memoria que podría estar libre. Por otro lado, el número máximo de Top Sites es mucho menor
                    que el número total de íconos guardados en esta carpeta.
                    <br/><br/>
                  </Col>
                </Row>

              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-danger just">
              <CardHeader>
                <i className="fa fa-refresh fa-paint-brush" /> Blended layers
              </CardHeader>
              <CardBody>
                <br/>
                Se utilizó la herramienta “Show blended layers” del simulador de Xcode para encontrar los lugares donde
                la interfaz estaba siendo repintada. Se descubrió que hay algunos lugares donde sucede, como los íconos
                y los textfields. El lugar más notable, la página de error de conexión, se debe seguramente a las
                restricciones impuestas por WebKit.
                <br/> <br/>
                <Row>
                  <img className="centertg" src={img12} width={'25%'} height={'25%'}/>
                  <img className="centertg" src={img13} width={'25%'} height={'25%'}/>
                  <img className="centertg" src={img14} width={'25%'} height={'25%'}/>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-danger just">
              <CardHeader>
                <i className="fa fa-check" /> Buenas prácticas
              </CardHeader>
              <CardBody>
                Algunas de las buenas prácticas de desempeño encontradas en la aplicación son las siguientes:
                <br/><br/>
                <ul>
                  <li>
                    Las constantes utilizadas en la aplicación están guardadas en Singletons para que puedan ser usadas
                    en diferentes partes de la aplicación sin ser definidas nuevamente y evitando posibles errores de
                    consistencia.
                  </li>
                  <br/>
                  <li>
                    La aplicación utiliza múltiples threads para correr procesos en el fondo, como por ejemplo, la
                    sincronización automatizada y el fetching de los favicons.
                  </li>
                  <br/>
                  <li>
                    Los Strings de errores y de información, entre otras, se encuentran en una clase única, evitando
                    errores de consistencia y código innecesario.
                  </li>
                  <br/>
                  <li>
                    La aplicación no hace uso de strong references.
                  </li>
                  <br/>
                  <li>
                    La aplicación hace uso de templates de clase que luego pueden ser extendidos en otras clases con el
                    fin de evitar reescribir código innecesario o de tener comportamientos inconsistentes en la
                    aplicación.
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-danger just">
              <CardHeader>
                <i className="fa fa-code" /> Codacy
              </CardHeader>
              <CardBody>
                Se usó la herramienta Codacy para analizar el código del repositorio. Se encontraron varios errores en
                las librerías que utilizaban, y un par en algunos archivos JS, HTML y CSS del repositorio, como el uso
                de los !important en CSS. Sin embargo, decidimos concentrarnos en los errores específicos de Swift, pues
                es el lenguaje principal de la aplicación. Gracias al linter de Xcode, la cantidad de errores es muy
                reducida, pues estos se indican mientras el código se escribe.
                <br/> <br/>
                <img className="centert" src={img15} width={'80%'} />
                <br/>
                Es posible ver que la mayoría de los errores son cosas pequeñas, como espacios en los comentarios. El
                force cast, comentado en el código, es algo necesario para la función de la aplicación, por lo que no
                puede ser cambiado. Estos errores no afectan el desempeño de la aplicación y deberían ser bastante
                fáciles de arreglar.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-danger just">
              <CardHeader>
                <i className="fa fa-clock-o" /> Pruebas
              </CardHeader>
              <CardBody>
                Utilizando 2 celulares diferentes, se midieron los tiempos que toma: la descarga, abrir la aplicación
                por primera y consecutiva vez, y la sincronización de la aplicación. Es claro que la mayoría de estos
                tiempos dependen bastante de la calidad de la conexión a internet que se esté utilizando. Por eso,
                se hicieron las pruebas sobre la misma red WiFi y red celular. Esto, sin embargo, no tiene en cuenta las
                posibles intermitencias que pueden tener las redes durante las pruebas, por lo que se tomó cada tiempo 3
                veces y se calculó el promedio.
                <br/><br/>
                <Table hover className='centertxt'>
                  <thead>
                  <tr>
                    <th>Acción</th>
                    <th>Tiempo iPhone6 + iOS11</th>
                    <th>Tiempo iPhone5 + iOS10</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Descarga con WiFi</td>
                    <td>45.216s</td>
                    <td>46.650</td>
                  </tr>
                  <tr>
                    <td>Descarga con 4G</td>
                    <td>22.048s</td>
                    <td>26.048</td>
                  </tr>
                  <tr>
                    <td>Abrir por 1a vez</td>
                    <td>3.458s en SplashScreen</td>
                    <td>7.968s en SplashScreen</td>
                  </tr>
                  <tr>
                    <td scope="row">Abrir después</td>
                    <td>1.440s</td>
                    <td>2.805s</td>
                  </tr>
                  <tr>
                    <td scope="row">Sincronización</td>
                    <td>3.142s</td>
                    <td>4.052s</td>
                  </tr>
                  </tbody>
                </Table>
                Es posible ver que los tiempos son ligeramente mayores en el iPhone 5, pero esto también se puede deber
                a las tecnologías de red de cada celular, y en todo caso, la diferencia de tiempos es bastante pequeña.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-danger just">
              <CardHeader>
                <i className="fa fa-user-secret" /> Tracking Protection
              </CardHeader>
              <CardBody>
                El Tracking Protection de la aplicación busca proteger la privacidad del usuario, bloqueando scripts
                que no sean esenciales a la experiencia web y que puedan impactar negativamente los tiempos de
                navegación. Firefox bloquea 4 categorías diferentes: scripts de propagandas, tracking, contenido y
                sociales. Los scripts se bloquean de acuerdo a archivos que están quemados en la aplicación y que
                contienen expresiones regulares para encontrar los dominios que deberían bloquearse, junto con
                excepciones que deberían permitirse. De esta manera, {' '}
                <a href="https://blog.mozilla.org/firefox/tracking-protection-always-on/" target="_blank">
                  Mozilla reportó <i className="fa fa-link" />
                </a> {' '}
                disminuir los tiempos de carga de páginas web a cerca de la mitad del tiempo, tanto de Firefox sin
                Tracking Protection, como de Chrome. <br/> <br/>
                Tracking Protection ofrece la opción de bloquear todos los scripts, en vez de sólo los sugeridos por
                Firefox. La aplicación advierte que esto podría causar que páginas web que dependen de scripts para
                funcionar dejen de hacerlo, y que recomienda no utilizar esta versión. Esto ocurre en especial en
                páginas que dependen mucho de animaciones. Por ejemplo, {' '}
                <a href="https://paperplanes.world/" target="_blank"> Paper Planes <i className="fa fa-link" /></a> {' '}
                no puede siquiera iniciar cuando este modo se utiliza.
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="12" md="6">
            <Card className="border-danger just">
              <CardHeader>
                <i className="fa fa-rocket" /> Progressive Web Apps (PWA)
              </CardHeader>
              <CardBody>
                Aunque esto depende de WebKit, la plataforma que utiliza Firefox iOS para renderizar las páginas web, se
                probó si las PWA funcionaban correctamente en la aplicación. Para hacerlo, se utilizó la página  {' '}
                <a href="https://pwa.rocks/" target="_blank">
                  pwa.rocks
                </a>
                , y se probaron todas las páginas listadas. Todas funcionaron correctamente en la aplicación, incluyendo
                la {' '}
                <a href="https://platform-status.mozilla.org/" target="_blank">
                  página de estado <i className="fa fa-link" />
                </a> {' '}
                de las plataformas de Firefox.

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Performance;

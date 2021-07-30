import React, {  Component  } from 'react'

export class Portafolio extends Component {
    render() {
        return (
            <>
                    <h1 class="h1">Pictogram</h1>
                    <p>
                        Es un clon de Instagram realizado con el Framework Laravel 6 y
                        la base de datos Microsoft Sql Server, Utilizando la arquitectura Mvc,
                        en este proyecto pude conocer como funciona el ORM de Laravel y los grandes beneficios de este,
                        también ver como funciona el almacenamiento en discos virtuales, lo cual facilita
                        de gran manera el control sobre los archivos que se suben al servidor.
                        En este proyecto se implemento un sistema de likes, perfiles, buscador personas, y un sistema
                        de comentarios.
                    </p>
                    <p>
                        Puedes encontrar el código fuente del proyecto en <a style={ { color: "blue" } }
                            href="https://github.com/amenpunk/pictogram">aqui</a>
                    </p>

                    <div class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="crop d-block w-100" src="https://github.com/amenpunk/pictogram/raw/master/img/1.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://github.com/amenpunk/pictogram/raw/master/img/2.png" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://github.com/amenpunk/pictogram/raw/master/img/4.png" alt="Third slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://github.com/amenpunk/pictogram/raw/master/img/5.png" alt="Third slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://github.com/amenpunk/pictogram/raw/master/img/6.png" alt="Third slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="https://github.com/amenpunk/pictogram/raw/master/img/7.png" alt="Third slide"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                    <h1 class="h1">Dashboard </h1>
                    <p>
                        Es un dashboard realizado con la librería Chart Js, el lenguaje de programación PHP
                        y el la base de datos Microsoft Sql Server, la finalidad de este proyecto era utilizar y crear
                        funciones y procedimientos por medio de SQL y que estos se vieran reflejados por medio de
                        gráficos
                        en las vistas por medio de Chart Js, entre las funciones podemos mencionar.
                    </p>
                    <ul>
                        <li>Porcentaje de usuarios activos</li>
                        <li>Media de puntuación de usuarios</li>
                        <li>Concurrencia de los jugadores durante un periodo</li>
                        <li>Estadísticas de las partidas</li>
                    </ul>

                    <p>
                        Puedes encontrar el codigo fuente del proyecto en <a style={ { color:"blue" } }
                            href="https://github.com/amenpunk/DashboardPHP">aqui</a>
                    </p>

                    <img class="img-fluid" src="img/dash.jpg" alt="dashboard php"/>

                    <h1 class="h1">Tienda en linea</h1>
                    <p>
                        Este proyecto consiste en en una tienda en linea realizada por medio de PHP y
                        la base de datos MySql, en este proyecto se implemento autenticación y roles ya que
                        existe un panel para usuarios y otro para administradores, los administradores pueden realizar
                        las siguentes operaciones:
                    </p>
                    <ul>
                        <li>Crear,modificar,eliminar productos</li>
                        <li>Crear categorías de productos</li>
                        <li>Administrar pedidos</li>
                        <li>Administrar precios y existencias</li>
                        <li>Cambiar permisos, etc</li>
                    </ul>

                    Los clientes puede agregar productos a un carrito y luego proceder a realizar el pedido
                    de este agregando la información de pago y la cantidad de los producto a comprar.

                    <p>
                        Puedes encontrar el codigo fuente del proyecto en <a style={ { color:"blue" } } href="https://github.com/amenpunk/php_store">aqui</a>
                    </p>

                    <div class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active"> <img class="crop d-block w-100" src="img/ti1.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/t2.png" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/t3.png" alt="Third slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/t4.png" alt="Third slide"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                    <h1 class="h1">Clínica Médica</h1>
                    <p>
                        Este proyecto fue realizado con el Framework .Net Core y la base de datos Sql Server,
                        con este proyecto se logro conocer como funciona el ORM de .Net (Entity Framework) el lenguaje
                        integrado de consultas
                        LINQ y su modelo de vistas razor,
                        también a su vez se generaron api's con autenticación por medio de Cookie's en el navegador,
                        estas api's fueron consumidas en el front-end con Javascript/Jquery.
                        El proyecto en general consiste en un sistema de administración de pacientes de una clínica
                        médica,
                        el administrador puede realizar la siguientes operaciones:
                        <ul>
                            <li>Administrar pacientes</li>
                            <li>Administrar citas</li>
                            <li>Generar expedientes</li>
                            <li>Registrar consultas y sus resultados (mediciones,recetas,diagnósticos y ordenes de
                                laboratorio)</li>
                            <li>Generar diferentes reportes</li>
                            <li>Facturar expedientes</li>
                        </ul>
                    </p>

                    <p>
                        Puedes encontrar el codigo fuente del proyecto en <a style={ { color:"blue" } }
                            href="https://github.com/amenpunk/ClinicaMvc">aqui</a>
                    </p>

                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="crop d-block w-100" src="img/clinca/1.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="crop d-block w-100" src="img/clinca/2.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="crop d-block w-100" src="img/clinca/3.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="crop d-block w-100" src="img/clinca/4.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="crop d-block w-100" src="img/clinca/5.png" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                                <img class="crop d-block w-100" src="img/clinca/6.png" alt="First slide"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                            data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
                            data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>


            </>
        )
    }
} 

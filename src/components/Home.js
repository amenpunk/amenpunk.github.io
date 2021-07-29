import React, { useState, useEffect, useRef  } from 'react' 


export function Home() {

    useEffect( () => {
        let bars =  document.getElementsByClassName('skillbar')
        for(let x = 0 ; x < bars.length; x++ ){
            let width = bars[x].getAttribute('data-percent')
            bars[x].animate([ { width: width }, ], { duration: 6000, iterations : 1, fill : "forwards" }) 
        }

    }, []) 


    return (
        <>
            <div class="row justify-content-center ff letter">
                <div class="col-auto cover">
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF0PmyXp93Zcw/profile-displayphoto-shrink_200_200/0/1594601021043?e=1632960000&v=beta&t=QPMrooLKO8JPz4eWyPUz24SCyGDcuNjkksY_zYNwZYI" class="zoom figure-img img-fluid cover" alt=""/>
                </div>
                <div class="col-auto">
                    <p class="htxt">Información de Contacto</p>
                    <p class="inf"><b>Ubicación: </b>Ciudad de Guatemala</p>
                    <p class="inf"><b>Nombre: </b>Edgar Rolando Cosajay Campos</p>
                    <p class="inf"><b>Correo: </b>ecc.code@gmail.com</p>

                    <div class="social">
                        <a href="https://github.com/amenpunk" > <span class="fab fa-lg fa-github"></span>  </a>
                        <a href="https://www.linkedin.com/in/ecc-code/"><span  class="fab fa-lg fa-linkedin-in"></span></a>
                        <a href="/"><span class="fab fa-stack-overflow"></span></a>
                        <a href="/"><span class="fab far fa-lg fa-envelope"></span> </a>
                    </div>

                </div>
            </div>



            <div class="row align-items-center">
                <article class="col text-center aboutm letter">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <img alt="profile_picture" class="umg-logo" src="https://flow.org/assets/featurette-faster-56e57b5eb50445d2903590e1553797e4637fcc0aa779b09bc9c5c8a8c08a1645.gif"/>
                        </div>
                        <p class="col ">    
                            Estudiante de Ingeniería en Sistemas en la Universidad Mariano Gálvez de Guatemala,
                            me encanta utilizar mi tiempo leyendo y escribiendo código, me apasiona analizar, administrar y estructurar datos,
                            pero no dejo de lado Ux/Ui, entusiasta del Open Source, Linux y 100% Autodidacta. 
                            En camino a ser Full Stack Developer.
                        </p>
                    </div>
                </article>    
                <article class="col-md-5 d-none d-md-block">
                    <a class="ta-bla"  href="https://github.com/amenpunk">
                        <img align="left" alt="estadisticas_github" class="tech" src="https://github-readme-stats.vercel.app/api?username=amenpunk&show_icons=true&theme=graywhite&count_private=true" />
                    </a>
                </article>
            </div> 


            <aside class="row">
                <aside class="col-md-8 main">

                    <div class="dev letter ">
                        <h2 class="dev-info">Lenguajes <i class="fas fa-code"></i> </h2>
                        <h4>Habilidades Principales</h4>



                        <div class="skillbar clearfix " data-percent="90%">
                            <div class="skillbar-title" style={ { background: "#E78625" } }><span>JavaScript</span></div>
                            <div class="skillbar-bar" style={ { background: "#F0DB4F"  } }></div>
                            <div class="skill-bar-percent">90%</div>
                        </div> 

                        <div class="skillbar clearfix " data-percent="85%">
                            <div class="skillbar-title" style={ { background: "#0e629e" } }><span>Python</span></div>
                            <div class="skillbar-bar" style={ { background: "#198fe3" } }></div>
                            <div class="skill-bar-percent">85%</div>
                        </div> 

                        <div class="skillbar clearfix " data-percent="85%">
                            <div class="skillbar-title" style={{ backgroundColor: "#46465e" } }><span>PHP</span></div>
                            <div class="skillbar-bar" style={{ backgroundColor: "#5a68a5" } }></div>
                            <div class="skill-bar-percent">85%</div>
                        </div>

                        <div class="skillbar clearfix " data-percent="80%">
                            <div class="skillbar-title" style={ { background: "#BF0000" } }><span>Java</span></div>
                            <div class="skillbar-bar" style={ { background: "#DE3423" } }></div>
                            <div class="skill-bar-percent">80%</div>
                        </div> 

                        <div class="skillbar clearfix " data-percent="50%">
                            <div class="skillbar-title" style={ { background: "#1d7a27" } }><span>C#</span></div>
                            <div class="skillbar-bar" style={ { background: "#2bab38" } }></div>
                                <div class="skill-bar-percent">50%</div>
                        </div>

                    </div>      

                    <div class="dev letter ">
                        <h2 class="dev-info">Bases de Datos <i class="fas fa-database"></i> </h2>

                        <div class="nivel letter">
                            <p class="nivel"><i  class="fas fa-check-square tres"> </i><strong> Avanzado </strong></p>
                            <p class="nivel"><i  class="fas fa-check-square dos"> </i><strong> Intermedio </strong></p>
                            <p class="nivel"><i  class="fas fa-check-square uno"> </i><strong> Fundamental </strong></p>
                        </div>       

                        <br/>
                        <p >
                            Diseño y normalización de bases de datos, experencia en programación SQL por medio de 
                            consultas para manipulación y definición de datos y control de transacciones.
                        </p>
                        <h4>SGBD Principales:</h4>

                        <div>
                            <p><i class="tres fas fa-check-square"></i><strong> Microsoft SQL Server</strong></p>
                            <p><i class="dos fas fa-check-square"></i><strong> MySql</strong></p>
                            <p><i class="dos fas fa-check-square"></i><strong> Maria DB</strong></p>
                        </div>
                    </div>

                    <div class="dev letter ">
                        <h2 class="dev-info">Sistemas Operativos <i class="fas fa-desktop"></i> </h2>
                        <p>
                            Administración de servicios en distintos sistemas opertativos, he utilizado Runit, SystemD & Init/RC
                        </p>
                        <p><i class="dos fas fa-check-square"></i><strong> Microsoft Windows</strong></p>
                        <p><i class="tres fas fa-check-square"></i><strong> GNU/Linux:</strong></p>
                        <p>
                            Distribuciones basdas en Debian & Archlinux.
                        </p>
                        <p><i class="uno fas fa-check-square"></i><strong> Unix</strong></p>
                        <p>
                            Distros FreeBSD & NetBSD
                        </p>
                    </div>

                </aside>

                <aside class="col-md-4 comple">
                    <div class="dev letter">
                        <h2 class="dev-info">Frameworks & Librerias <i class="fas fa-project-diagram"></i></h2>
                        <p><i class="uno fas fa-check-square"></i><strong> Laravel</strong></p>
                        <p><i class="tres fas fa-check-square"></i><strong> Jquery</strong></p>
                        <p><i class="tres fas fa-check-square"></i><strong> Bootstrap 4</strong></p>
                        <p><i class="tres fas fa-check-square"></i><strong> Firebase</strong></p>
                        <p><i class="tres fas fa-check-square"></i><strong> Express.js</strong></p>
                        <p><i class="uno fas fa-check-square"></i><strong> .Net Core</strong></p>
                        <p><i class="tres fas fa-check-square"></i><strong> Node JS</strong></p>

                    </div>

                    <div class="dev letter "  style={ { paddingTop: 0 } }>
                        <h2 class="dev-info">Infraestructura & DevOps <i class="fas fa-project-diagram"></i></h2>
                        <p><i class="tres fas fa-check-square"></i><strong> Git/Github</strong></p>
                        <p><i class="dos fas fa-check-square"></i><strong> Microsoft Azure</strong></p>
                        <p><i class="dos fas fa-check-square"></i><strong> Google Cloud</strong></p>
                        <p><i class="tres fas fa-check-square"></i><strong> Terminal/Shell Script</strong></p>
                        <p><i class="dos fas fa-check-square"></i><strong> Docker</strong></p>
                        <p><i class="uno fas fa-check-square"></i><strong> CI/CD</strong></p>

                    </div>


                    <div class="dev letter "  style={ { paddingTop : 0 } }>
                        <h2 class="dev-info">Otras Skills <i class="fas fa-book"></i></h2>
                        <p><i style={{ color:'black' }} class="fas fa-check-square"></i><strong> Debuggin</strong></p>
                        <p><i style={{ color:'black' }} class="fas fa-check-square"></i><strong> Estructuras de datos</strong></p>
                        <p><i style={{ color:'black' }} class="fas fa-check-square"></i><strong> Algoritmos</strong></p>
                        <p><i style={{ color:'black' }} class="fas fa-check-square"></i><strong> Testing</strong></p>
                        <p><i style={{ color:'black' }} class="fas fa-check-square"></i><strong> Pensamiento estructurado/Multiparadigma</strong></p>
                        <p><i style={{ color:'black' }} class="fas fa-check-square"></i><strong> Patrones de diseño</strong></p>
                        <p><i style={{ color:'black' }} class="fas fa-check-square"></i><strong> WebServices</strong></p>
                        <p><i style={{ color:'black' }} class="fas fa-check-square"></i><strong> Curiosidad/Creatividad :)</strong></p>
                    </div>

                </aside>
            </aside>

        </>
    )
}

import React, { useEffect } from 'react'


export function Home() {

  useEffect(() => {
    let bars = document.getElementsByClassName('skillbar')
    for (let x = 0; x < bars.length; x++) {
      let width = bars[x].getAttribute('data-percent')
      bars[x].animate([{ width: width },], { duration: 6000, iterations: 1, fill: "forwards" })
    }

  }, [])


  return (
    <>
      <div style={{ marginTop:25, padding:25 }} className="row justify-content-center ff letter">
        <div className="col-auto cover">
          <img alt="gophervim" src="https://media.licdn.com/dms/image/C4D03AQHS-LlQkYg41Q/profile-displayphoto-shrink_200_200/0/1652234907622?e=1677715200&v=beta&t=BgFyPnpu3eCldF-RtyqJpWspnioyhxHtNCaTMxFu-lY" className="zoom figure-img img-fluid cover"/>
        </div>
        <div className="col-auto">
          <p className="htxt">Información de Contacto</p>
          <p className="inf"><b>Ubicación: </b>Ciudad de Guatemala</p>
          <p className="inf"><b>Nombre: </b>Edgar Rolando Cosajay Campos</p>
          <p className="inf"><b>Correo: </b>ecc.code@gmail.com</p>

          <div className="social">
            <a href="https://github.com/amenpunk" > <span className="fab fa-lg fa-github"></span>  </a>
            <a href="https://www.linkedin.com/in/ecc-code/"><span className="fab fa-lg fa-linkedin-in"></span></a>
            <a href="/"><span className="fab fa-stack-overflow"></span></a>
            <a href="/"><span className="fab far fa-lg fa-envelope"></span> </a>
          </div>

        </div>
      </div>



      <div className="row align-items-center">
        <article className="col-md-7 text-center aboutm letter">
          <div className="row align-items-center">
            <div className="col-md-3">
              <img alt="vim_gopher" className="umg-logo" src="Me.png" />
            </div>
            <p className="col ">
              Hola, bienvenido, me llamo Edgar, soy Full Stack Developer con más de 4 años de experiencia escribiendo código en distintas áreas.
              Me gusta utilizar NeoVim para programar, la música electrónica, el anime y los videojuegos.
              </p>
          </div>
        </article>
        <article style={{padding:15}} className="col-md-5 d-none d-md-block">
          <a className="ta-bla" href="https://github.com/amenpunk">
            <img align="left" alt="estadisticas_github" className="tech" src="https://github-readme-stats.vercel.app/api?username=amenpunk&show_icons=true&theme=graywhite&count_private=true" />
          </a>
        </article>
      </div>


      <aside className="row">
        <aside className="col-md-8 main">

          <div className="dev letter ">
            <h2 className="dev-info">Lenguajes <i className="fas fa-code"></i> </h2>
            <h4>Habilidades Principales</h4>



            <div className="skillbar clearfix " data-percent="90%">
              <div className="skillbar-title" style={{ background: "#E78625" }}><span>JavaScript</span></div>
              <div className="skillbar-bar" style={{ background: "#F0DB4F" }}></div>
              <div className="skill-bar-percent">90%</div>
            </div>

            <div className="skillbar clearfix " data-percent="85%">
              <div className="skillbar-title" style={{ background: "#BF0000" }}><span>Java</span></div>
              <div className="skillbar-bar" style={{ background: "#DE3423" }}></div>
              <div className="skill-bar-percent">85%</div>
            </div>

            <div className="skillbar clearfix " data-percent="80%">
              <div className="skillbar-title" style={{ backgroundColor: "#46465e" }}><span>PHP</span></div>
              <div className="skillbar-bar" style={{ backgroundColor: "#5a68a5" }}></div>
              <div className="skill-bar-percent">85%</div>
            </div>

            <div className="skillbar clearfix " data-percent="65%">
              <div className="skillbar-title" style={{ background: "#0e629e" }}><span>Python</span></div>
              <div className="skillbar-bar" style={{ background: "#198fe3" }}></div>
              <div className="skill-bar-percent">65%</div>
            </div>

            <div className="skillbar clearfix " data-percent="50%">
              <div className="skillbar-title" style={{ background: "#1d7a27" }}><span>C#</span></div>
              <div className="skillbar-bar" style={{ background: "#2bab38" }}></div>
              <div className="skill-bar-percent">50%</div>
            </div>

          </div>

          <div className="dev letter ">
            <h2 className="dev-info">Bases de Datos <i className="fas fa-database"></i> </h2>
            <p >
              Diseño y normalización de bases de datos, experencia en programación SQL por medio de
              consultas para manipulación y definición de datos y control de transacciones, asi como modelado NoSQL
            </p>
            <div>
              <p><i className="fas fa-check-square"></i><strong> Microsoft SQL Server</strong></p>
              <p><i className="fas fa-check-square"></i><strong> MySql</strong></p>
              <p><i className="fas fa-check-square"></i><strong> Maria DB</strong></p>
              <p><i className="fas fa-check-square"></i><strong> Mongo DB</strong></p>
            </div>
          </div>

          <div className="dev letter ">
            <h2 className="dev-info">Sistemas Operativos <i className="fas fa-desktop"></i> </h2>
            <p>
              Administración de servicios en distintos sistemas opertativos, he utilizado Runit, SystemD & Init/RC
            </p>
            <p><i className="fas fa-check-square"></i><strong> Microsoft Windows</strong></p>
            <p><i className="fas fa-check-square"></i><strong> GNU/Linux:</strong></p>
            <p>
              Distribuciones basdas en Debian & Archlinux.
            </p>
            <p><i className="fas fa-check-square"></i><strong> Unix</strong></p>
            <p>
              Distros FreeBSD & NetBSD
            </p>
          </div>

        </aside>

        <aside className="col-md-4 comple">
          <div className="dev letter">
            <h2 className="dev-info">Frameworks & Librerias <i className="fas fa-project-diagram"></i></h2>
            <p><i className="fas fa-check-square"></i><strong> Laravel / CodeIgniter</strong></p>
            <p><i className="fas fa-check-square"></i><strong> React / React Native</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Flask / Django</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Jquery</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Bootstrap</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Firebase</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Dialogflow</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Express.js</strong></p>
            <p><i className="fas fa-check-square"></i><strong> .Net Core</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Node JS</strong></p>

          </div>

          <div className="dev letter " style={{ paddingTop: 0 }}>
            <h2 className="dev-info">Infraestructura & DevOps <i className="fas fa-project-diagram"></i></h2>
            <p><i className="fas fa-check-square"></i><strong> Git/Github</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Microsoft Azure</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Google Cloud</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Terminal/Shell Script</strong></p>
            <p><i className="fas fa-check-square"></i><strong> Docker</strong></p>
            <p><i className="fas fa-check-square"></i><strong> CI/CD </strong></p>
            <p><i className="fas fa-check-square"></i><strong> Jenkins </strong></p>

          </div>


          <div className="dev letter " style={{ paddingTop: 0 }}>
            <h2 className="dev-info">Otras Skills <i className="fas fa-book"></i></h2>
            <p><i style={{ color: 'black' }} className="fas fa-check-square"></i><strong> Debuggin</strong></p>
            <p><i style={{ color: 'black' }} className="fas fa-check-square"></i><strong> Estructuras de datos</strong></p>
            <p><i style={{ color: 'black' }} className="fas fa-check-square"></i><strong> Algoritmos </strong></p>
            <p><i style={{ color: 'black' }} className="fas fa-check-square"></i><strong> Testing</strong></p>
            <p><i style={{ color: 'black' }} className="fas fa-check-square"></i><strong> Patrones de diseño</strong></p>
          </div>

        </aside>
      </aside>

    </>
  )
}

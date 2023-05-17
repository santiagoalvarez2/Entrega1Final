import React from 'react';
import imagen1 from '../Images/general1.jpg'
import imagen2 from '../Images/examenes.jpg'
import imagen3 from '../Images/urgencias.jpg'
import imagen4 from '../Images/control.jpg'
import imgelogo from '../Images/logo.jpg'

function Index1(){
    return (
        <div className="index">
          <section id='Inicio'>
          <header>
            <nav>
              <ul>
                <li><a href="#Inicio">Inicio</a></li>
                <li><a href="#Servicios">Servicios</a></li>
                <li><a href="#Acerca-de">Acerca de</a></li>
                <li><a href="#Login">Login</a></li>
              </ul>
            </nav>
          </header>
          <br></br>
          <main>
            <section>
              <div className='imagen'>
            <img src={imgelogo}/>
            </div>
            <hr></hr>
              <h2>Nuestros servicios</h2>
              <ul>
                <li>Consulta médica general</li>
                <li>Exámenes de laboratorio</li>
                <li>Atención a urgencias</li>
                <li>Control de enfermedades crónicas</li>
              </ul>
            </section>
            <section>
              <h2>Acerca de nosotros</h2>
              <p>Somos una clínica con más de 20 años de experiencia en el cuidado de la salud de nuestros pacientes. Bienvenido a nuestra clínica médica, donde nuestro objetivo es proporcionar la mejor atención médica posible a nuestros pacientes.
          <br></br>Nos esforzamos por ofrecer un ambiente acogedor y amigable para que nuestros pacientes se sientan cómodos y seguros durante su visita.
              En nuestra clínica contamos con un equipo de profesionales altamente capacitados y experimentados en diferentes áreas de la medicina, lo que nos permite brindar una amplia gama de servicios médicos de alta calidad.
          <br></br> Nos comprometemos a trabajar de cerca con nuestros pacientes para entender sus necesidades y ofrecer un tratamiento personalizado y efectivo.
              Además de nuestros servicios médicos, también nos enfocamos en educar a nuestros pacientes sobre cómo pueden mantener un estilo de vida saludable.
          <br></br> Creemos que la prevención es la mejor medicina, y alentamos a nuestros pacientes a tomar un papel activo en su salud y bienestar.
              Gracias por elegir nuestra clínica médica como su proveedor de atención médica. Estamos aquí para servirle y esperamos poder ayudarlo a alcanzar sus metas de salud y bienestar.
              </p>
            </section>
          </main>
          <footer>
            <p>Clínica Reales - Todos los derechos reservados</p>
          </footer>
          </section>
          <br></br>
          <section id='Servicios'>
    <main>
          <section className="General"> 
          <h2>Consulta Médica General</h2>
          <p>Ofrecemos consultas médicas generales para pacientes de todas las edades. Nuestros médicos están altamente capacitados para tratar una amplia variedad de enfermedades y dolencias.</p>
          <img src={imagen1}/>
          <hr></hr>
          </section>
        <section class="Laboratorio">
        <h2>Exámenes de Laboratorio</h2>
        <p>Realizamos una variedad de exámenes de laboratorio, incluyendo análisis de sangre, orina y heces, pruebas de función renal y hepática, y mucho más. Nuestro personal de laboratorio está altamente capacitado y utiliza tecnología de última generación para obtener resultados precisos y confiables.</p>
        <img src={imagen2}/>
        <hr></hr>
        </section>
        <section class="Urgencias">
        <h2>Atención a Urgencias</h2>
        <p>Estamos disponibles para atender urgencias médicas durante nuestras horas de atención. Si tiene una emergencia médica, no dude en comunicarse con nosotros o visitarnos directamente en nuestra clínica.</p>
        <img src={imagen3}/>
        <hr></hr>
        </section>
        <section class="Control">
          <h2>Control de Enfermedades Crónicas</h2>
          <p>Si padece de una enfermedad crónica como diabetes, hipertensión o artritis, nuestro equipo médico puede ayudarlo a controlar su enfermedad y mejorar su calidad de vida. Ofrecemos una variedad de tratamientos y terapias personalizadas para pacientes con enfermedades crónicas.</p>
          <img src={imagen4}/>
          <hr></hr>
        </section>
    </main>
    <footer>
      <p>Clínica Reales - Todos los derechos reservados</p>
    </footer>
          </section>
          <br></br>
          <section id='Acerca-de'>
    <main>
        <section class="Ambitos">
            <h2>Ambitos</h2>
            <ul>
             <li>Consultas médicas: La clínica tiene un espacio destinado a consultas médicas con profesionales altamente capacitados en diversas especialidades, como medicina general, pediatría, ginecología, dermatología, oftalmología, entre otros.</li> 
              
             <li> Laboratorio clínico: tenemos un laboratorio clínico propio, para realizar pruebas y análisis necesarios en el diagnóstico y seguimiento de enfermedades.</li>
              
              <li>Imágenes diagnósticas: contamos con equipos de radiología, ecografía, tomografía, resonancia magnética, entre otros, para poder realizar imágenes diagnósticas y estudios radiológicos de alta calidad.</li>

              <li>Farmacia: contamos con una farmacia propia, para que los pacientes puedan adquirir los medicamentos recetados de manera rápida y segura.</li>

              <li>Sala de emergencias: tenemos una sala de emfergencias por que es fundamental que la clínica este bien equipada y preparada para atender situaciones médicas urgentes o de emergencia.</li>

              <li>Rehabilitación: Ofrecemos servicios de rehabilitación física, terapia ocupacional y otros servicios de recuperación y cuidado de la salud.</li>

              <li>Atención domiciliaria: también ofrecemos servicios de atención domiciliaria para pacientes con enfermedades crónicas o que no pueden acudir a la clínica.</li>
            </ul>
        </section> 
        <section class="contenido">
            <h2>Quiénes somos</h2>
            <p>Somos una clínica médica dedicada a brindar una atención médica integral y de alta calidad a nuestros pacientes. Con más de 20 años de experiencia en el campo de la medicina, nos hemos establecido como una de las clínicas más confiables y reconocidas de la región.</p>
      
            <h2>Nuestro equipo</h2>
            <p>En nuestra clínica, contamos con un equipo de profesionales altamente capacitados en diversas especialidades médicas, incluyendo medicina general, pediatría, ginecología, dermatología, oftalmología y otras áreas. Además, contamos con tecnología de última generación en nuestras instalaciones, lo que nos permite ofrecer a nuestros pacientes los tratamientos y diagnósticos más avanzados.</p>
      
            <h2>Nuestra misión</h2>
            <p>En nuestra clínica, nos esforzamos por crear un ambiente amigable y acogedor para nuestros pacientes, y nos comprometemos a ofrecer una atención personalizada y centrada en las necesidades individuales de cada paciente. Nos enorgullece ser parte de la comunidad y trabajar para mejorar la salud y el bienestar de nuestros pacientes.</p>
      
            <h2>Contacto</h2>
            <p>Si está buscando una clínica confiable y de alta calidad para atender sus necesidades médicas, ¡nos encantaría ser su opción! Por favor, no dude en ponerse en contacto con nosotros para programar una cita o para obtener más información sobre nuestros servicios.</p>
          </section>
    </main>
    <footer>
        <p>© 2023 Clínica Reales. Todos los derechos reservados.</p>
    </footer>
          </section>
          <br></br>
          <section id='Login'>
    <main>
    <h1>Inicio de Sesión</h1>
      <form>
        <label for="usuario">Usuario:</label>
        <input type="text" id="usuario" name="usuario" required />
        <br /><br />
        <label for="contraseña">Contraseña:</label>
        <input type="password" id="contraseña" name="contraseña" required />
        <br /><br />
        <input type="submit" value="Iniciar Sesión" />
      </form>
      </main>
          </section>
          <hr></hr>
          <div className='imagen'>
            <img src={imgelogo}/>
            </div>
        </div>
      );
    }
export default Index1;
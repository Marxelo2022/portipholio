import React from "react";
import { useSelector } from "react-redux";
import "../styles/Information.css";
import iSequelize from "../assets/icon-Sequelize.svg";
import iExpress from "../assets/icon-express.svg";

const Information = () => {
  const active = useSelector((state) => state.seeSection);
  return (
    <section
      id="Information"
      className={`${active === "Information" && "active"}`}
    >
      <h2 className="caption">Información</h2>
      <p className="paragraph">
        Algunos datos importantes sobre mi vida profesional.
      </p>
      <div className="education">
        <h2 className="secondary-subtitle">
          <i className="bx bxs-graduation bx-tada bx-flip-horizontal"></i>
          Educación
        </h2>
        <ul>
          <li className="card-education">
            <span>FEB_2022 - NOV_2022</span>
            <h4>Academlo</h4>
            <h6>Bootcamp-Mexico</h6>
            <p>Programación Web Full-Stack y Ciencias de Computación.</p>
          </li>
        </ul>
      </div>
      <div className="skill">
        <h2 className="secondary-subtitle">
          <i className="bx bxs-wrench bx-tada"></i>Habilidades
        </h2>
        <p className="paragraph">
          Diferentes habilidades técnicas y sociales que aprendí durante mi
          proceso de Educación.
        </p>
        <div className="code-skill">
          <h2 className="skills-section-title">Código</h2>
          <div className="code-skill-container ">
            <div className="code-skills-card btn-cursor-hover">
              <input type="radio" name="acc" id="acc1" />
              <label htmlFor="acc1" className="btn-cursor-hover">
                <h4>
                  <i className="bx bx-code-alt"></i>
                </h4>
                <h5>Desarrollo FrontEnd</h5>
              </label>
              <div className="code-skill-content">
                <ul>
                  <li>
                    <i className="bx bxl-html5"></i>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-css3"></i>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-react"></i>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-redux"></i>
                    <span>Principiante</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="code-skills-card btn-cursor-hover">
              <input type="radio" name="acc" id="acc2" />
              <label htmlFor="acc2" className="btn-cursor-hover">
                <h4>
                  <i className="bx bx-server"></i>
                </h4>
                <h5>Desarrollo BackEnd</h5>
              </label>
              <div className="code-skill-content">
                <ul>
                  <li>
                    <i className="bx bxl-nodejs"></i>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-postgresql"></i>
                    <span>Intermedio</span>
                  </li>
                  {/* <li>
                    <i className="bx bxl-mongodb"></i>
                    <span>Principiante</span>
                  </li> */}
                  <li>
                    <img src={iSequelize} alt="icon sequelize" />
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <img src={iExpress} alt="icon sequelize" />
                    <span>Intermedio</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="code-skills-card btn-cursor-hover">
              <input type="radio" name="acc" id="acc3" />
              <label htmlFor="acc3" className="btn-cursor-hover">
                <h4>
                  <i className="bx bx-wrench"></i>
                </h4>
                <h5>Herramientas</h5>
              </label>
              <div className="code-skill-content">
                <ul>
                  <li>
                    <i className="bx bxl-git"></i>
                    <span>Principiante</span>
                  </li>
                  <li>
                    <i className="bx bxl-visual-studio"></i>
                    <span>Intermedio</span>
                  </li>
                  <li>
                    <i className="bx bxl-github"></i>
                    <span>Intermedio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="soft-skill">
          <h2 className="skills-section-title">Habilidades blandas</h2>
          <ul>
            <li>
              <i className="bx bx-check-double"></i> Proactivo
            </li>
            <li>
              <i className="bx bx-check-double"></i> Perseverante
            </li>
            <li>
              <i className="bx bx-check-double"></i> Comunicación asertiva
            </li>
            <li>
              <i className="bx bx-check-double"></i> Buena actitud
            </li>
            <li>
              <i className="bx bx-check-double"></i> Amable
            </li>
            <li>
              <i className="bx bx-check-double"></i> Empatico
            </li>
            <li>
              <i className="bx bx-check-double"></i> Adaptabilidad
            </li>
            <li>
              <i className="bx bx-check-double"></i> Aprendizaje rapido
            </li>
            <li>
              <i className="bx bx-check-double"></i> Organización y
              planificación
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Information;

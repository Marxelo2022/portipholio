import React from "react";
import Data from "../utils/projects.json";
import "../styles/Works.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { motion } from "framer-motion";
import { setSpanProyect } from "../store/slices/spanProyect.slice";

const Works = () => {
  const spanProyect = useSelector((state) => state.spanProyect);
  const active = useSelector((state) => state.seeSection);
  const [projetsData, setProjectsData] = useState(Data);
  const dispatch = useDispatch();

  const filterProyects = (key) => {
    dispatch(setSpanProyect(key));
    const filterData = Data.filter((proyect) => proyect.category === key);
    setProjectsData(filterData);
  };
  const filterAll = (key) => {
    setProjectsData(Data);
    dispatch(setSpanProyect(key));
  };
  return (
    <section id="Projects" className={`${active === "Projects" && "active"}`}>
      <h2 className="caption">Proyectos</h2>
      <p className="paragraph">
        Todos las Apps Webs que realicé aplicando lo aprendido en Academlo.
      </p>
      <div>
        <span
          className={`btn-cursor-hover ${spanProyect === "all" && "active"}`}
          onClick={() => filterAll("all")}
        >
          Todos
        </span>
        <span
          className={`btn-cursor-hover ${spanProyect === "front" && "active"}`}
          onClick={() => filterProyects("front")}
        >
          Front
        </span>
        <span
          className={`btn-cursor-hover ${spanProyect === "back" && "active"}`}
          onClick={() => filterProyects("back")}
        >
          Back
        </span>
        <span
          className={`btn-cursor-hover ${spanProyect === "full" && "active"}`}
          onClick={() => filterProyects("full")}
        >
          Full
        </span>
      </div>
      <ul className="projects">
        {projetsData?.map((project) => (
          <motion.li
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: Math.random(), duration: 0.2 }}
            className="card"
            key={project.id}
          >
            <div className="header">
              <div className="img-box">
                <img src={project.img} alt="Img-Proyecto" />
              </div>
            </div>
            <div className="content">
              <h2 className="title">{project.name}</h2>
              <div>
                <a
                  className="btn-cursor-hover"
                  target="_blank"
                  rel="noreferrer"
                  href={project.gitHub}
                >
                  <i className="bx bxl-github"></i>
                </a>
                {project.category !== "back" && (
                  <a
                    className="btn-cursor-hover"
                    target="_blank"
                    rel="noreferrer"
                    href={project.web}
                  >
                    <i className="bx bx-windows"></i>
                  </a>
                )}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Works;

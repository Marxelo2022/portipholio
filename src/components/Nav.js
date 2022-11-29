import "../styles/Nav.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { setSeeSection } from "../store/slices/seeSection.slice";
import { actionNav } from "../store/slices/seeSection.slice";

const Nav = () => {
  const [scrollToTop, setScrollToTop] = useState(false);
  const activeLink = useSelector((state) => state.seeSection);
  const dispatch = useDispatch();
  let y;

  window.onscroll = () => {
    dispatch(actionNav());
    y = window.scrollY;
    if (y >= 550) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };
  window.addEventListener("load", () => {
    dispatch(actionNav());
  });

  const activeCard = (e) => {
    if (window.screen.width >= 1100) {
      dispatch(setSeeSection(e));
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            className={`btn-cursor-hover  ${
              activeLink === "AbautMe" ? "active-link" : "navigation-links"
            }`}
            to="AbautMe"
            offset={window.screen.width >= 561 ? -20 : -65}
            smooth={true}
            duration={500}
            onClick={() => activeCard("AbautMe")}
          >
            <i className="bx bxs-user"></i>
            <span>Sobre mi</span>
          </Link>
        </li>
        <li>
          <Link
            className={`btn-cursor-hover ${
              activeLink === "Information" ? "active-link" : "navigation-links"
            }`}
            to="Information"
            offset={window.screen.width >= 561 ? -20 : -75}
            smooth={true}
            duration={500}
            onClick={() => activeCard("Information")}
          >
            <i className="bx bxs-info-circle"></i>
            <span>Información</span>
          </Link>
        </li>
        <li>
          <Link
            className={`btn-cursor-hover ${
              activeLink === "Projects" ? "active-link" : "navigation-links"
            }`}
            to="Projects"
            offset={window.screen.width >= 561 ? -20 : -75}
            smooth={true}
            duration={500}
            onClick={() => activeCard("Projects")}
          >
            <i className="bx bxs-briefcase"></i>
            <span>Proyectos</span>
          </Link>
        </li>
        <li>
          <Link
            className={`btn-cursor-hover ${
              activeLink === "Contact" ? "active-link" : "navigation-links"
            }`}
            to="Contact"
            offset={window.screen.width >= 561 ? -20 : -75}
            smooth={true}
            duration={500}
            onClick={() => activeCard("Contact")}
          >
            <i className="bx bxs-envelope"></i>
            <span>Contacto</span>
          </Link>
        </li>
      </ul>
      {scrollToTop && (
        <div
          className="scrolltop btn-cursor-hover"
          onClick={() => scroll.scrollToTop()}
        >
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;

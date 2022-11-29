import {
  Header,
  AbautMe,
  Information,
  Works,
  Contact,
  Message,
} from "./components";
import { motion } from "framer-motion";
import "./styles/App.css";
import { magicMouse } from "magicmouse.js";

const options = {
  cursorOuter: "circle-basic",
  hoverEffect: "circle-move",
  hoverItemMove: false,
  defaultCursor: true,
  outerWidth: 30,
  outerHeight: 30,
};

magicMouse(options);

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Header />
        <main>
          <AbautMe />
          <Information />
          <Works />
          <Contact />
          <footer>
            <h4>Gracias por la visita.</h4>
            <p>--Diego Nieves--</p>
          </footer>
        </main>
        <Message />
      </motion.div>
    </>
  );
}

export default App;

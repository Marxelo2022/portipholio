import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Message.css";
import { motion } from "framer-motion";
import { setMessage } from "../store/slices/message.slice";

const Message = () => {
  const messaje = useSelector((state) => state.message);
  const dispatch = useDispatch();
  return (
    <>
      {messaje !== null && (
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          exit={{ x: 350 }}
          className="message"
        >
          <span
            className="btn-cursor-hover"
            onClick={() => dispatch(setMessage(null))}
          >
            <i className="bx bx-x"></i>
          </span>
          <p>{messaje}</p>
        </motion.div>
      )}
    </>
  );
};

export default Message;

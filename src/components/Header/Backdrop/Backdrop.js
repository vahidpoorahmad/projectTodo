import React from "react";
import "./Backdrop.css";
function Backdrop({ show, click }) {
  return show ? <div className="backdrop" onClick={click}></div> : null;
}

export default Backdrop;

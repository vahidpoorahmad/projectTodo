import React from "react";
import "./AppLauncher.css";
import Backdrop from "../Backdrop/Backdrop";
import { useState } from "react";
import SidbarAppLauncher from "./SidbarAppLauncher/SidbarAppLauncher";
function AppLauncher() {
  const products = [
    { id: 1, title: "Outlook" },
    { id: 2, title: "OneDrive" },
    { id: 3, title: "Teams" },
    { id: 4, title: "Word" },
    { id: 5, title: "Excel" },
    { id: 6, title: "PowerPoint" },
    { id: 7, title: "OneNote" },
    { id: 8, title: "To Do" },
    { id: 9, title: "Family Safety" },
    { id: 10, title: "Calendar" },
    { id: 11, title: "Skype" },
  ];
  const [show, setShow] = useState(false);
  const showProductsHandler = () => {
    setShow(true);
    console.log("Show ");
  };
  const hideProductHandler = () => {
    setShow(false);
    console.log("Hide");
  };
  const CloseModalHandler = () => {
    setShow(false);
  };
  return (
    <div className="lancher">
      <Backdrop click={CloseModalHandler} show={show} />
      <button className="ancher__icon" onClick={showProductsHandler}>
        <i className="fas fa-user"></i>
      </button>

      {show ? (
        <SidbarAppLauncher onclick={hideProductHandler} products={products} />
      ) : null}
    </div>
  );
}

export default AppLauncher;

import React from "react";
import "./HederCenter.css";
import { useState } from "react";
import SidebarSetting from "./SidebarSetting/SidebarSetting";
import SidebarHellpe from "./SidebarHellpe/SidebarHellpe";
import SidebarNew from "./SidebarNew/SidebarNew";
import Filter from "./Filter/Filter";

function HederCenter({ filterTaskHandler, value }) {
  const [showSetting, setShowSetting] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showNew, setShowNew] = useState(false);

  const showSettinghandler = (e) => {
    const show = showSetting;
    setShowSetting(!show);

    if (!show) {
      e.target.style.background = "#faf9f8";
    } else {
      e.target.style.background = "#346fef";
    }
  };

  const hideSettingHandler = () => {
    setShowSetting(false);
  };
  const showHelpHandler = (e) => {
    const show = showHelp;
    setShowHelp(!show);

    if (!show) {
      e.target.style.background = "#faf9f8";
    } else {
      e.target.style.background = "#346fef";
    }
  };
  const hideHelpHandler = () => {
    setShowHelp(false);
  };
  const showNewHandler = (e) => {
    const show = showNew;
    setShowNew(!show);

    if (!show) {
      e.target.style.background = "#faf9f8";
    } else {
      e.target.style.background = "#346fef";
    }
  };
  const hideNewHandler = () => {
    setShowNew(false);
  };
  return (
    <div className="navbar__center">
      <div className="navbar__center--brand">
        <h4>To Do</h4>
      </div>
      <div className="navbar__center--inputSearch">
        <Filter filtersearch={filterTaskHandler} value={value} />
      </div>
      <div className="Region">
        <button className="Region__icon setting" onClick={showSettinghandler}>
          <i className="fas fa-user"></i>
        </button>
        {showSetting ? <SidebarSetting onclick={hideSettingHandler} /> : null}
        <button className="Region__icon help" onClick={showHelpHandler}>
          <i className="fas fa-user"></i>
        </button>
        {showHelp ? <SidebarHellpe onclick={hideHelpHandler} /> : null}
        <button className="Region__icon new" onClick={showNewHandler}>
          <i className="fas fa-user"></i>
        </button>
        {showNew ? <SidebarNew onclick={hideNewHandler} /> : null}
      </div>
    </div>
  );
}

export default HederCenter;

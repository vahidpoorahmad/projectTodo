import React from "react";
import "./SidebarHellpe.css";
function SidebarHellpe({ onclick }) {
  return (
    <div className="side-help">
      <div className="side-help__controul">
        <div className="side-help__neutral">
          <h2 className="side-help__neutral--title">Help</h2>
          <button className="side-help__neutral--icon" onClick={onclick}>
            <i className="fas fa-user"></i>
          </button>
        </div>
        <div className="side-help__body">
          <a
            href="https://go.microsoft.com/fwlink/?linkid=2156547"
            className="side-help__sub"
          >
            Get support
          </a>

          <div className="side-help__wrapper">
            <button className="side-help__btn">Sync</button>
            <span className="side-help__span">up to date</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarHellpe;

import React from "react";
import "./SidebarSetting.css";
function SidebarSetting({ onclick }) {
  return (
    <div className="side-setting">
      <div className="side-setting__control">
        <div className="side-setting__neutral">
          <h2 className="side-setting__neutral--title">Setting</h2>
          <button className="side-setting__neutral--icon" onClick={onclick}>
            <i className="fas fa-user"></i>
          </button>
        </div>
        <h2 className="side-setting__subtitle">General</h2>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Confirm before deleting
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Add new tasks on top
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Move starred tasks to top
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Play completion sound
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Show right-click menus
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Turn on reminder notifications
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Show tasks that seem important in My Day
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <h2 className="side-setting__subtitle">My Day</h2>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Show potential tasks in My Day
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Show due tasks suggestions
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <h2 className="side-setting__subtitle">Smart Lists</h2>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">Important</label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">Planned</label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">All</label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">Completed</label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Assigned to me
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">
            Auto-hide empty smart lists
          </label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
        <h2 className="side-setting__subtitle">Connected apps</h2>
        <div className="side-setting__confrim">
          <label className="side-setting__confrim--subtitle">Planner</label>
          <div className="side-setting__confrim--checkbox">
            <input type="checkbox" className="input-checkbox" />
            <label className="text"></label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarSetting;

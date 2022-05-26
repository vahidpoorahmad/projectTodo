import React from "react";
import "./SidbarAppLauncher.css";
function SidbarAppLauncher({ products, onclick }) {
  return (
    <div className="sidebar">
      <div className="sidebar__countrol">
        <div className="sidebar__use">
          <div className="sidebar__use--icon">
            <button onClick={onclick}>
              <i className="fas fa-user"></i>
            </button>
          </div>
          <div className="sidebar__use--text">
            office
            <button>
              <i className="fas fa-user"></i>
            </button>
          </div>
        </div>
        <div className="sidebar__subset">
          <h2 className="sidebar__title">Microsoft 365</h2>

          <ul className="navbar-sid">
            {products.map((item) => (
              <li key={item.id} className="navbar-sid__item">
                <a href={`https://www.google.com`} className="navbar-sid__link">
                  <img
                    src={`/imgeAppLancher/${item.id}.png`}
                    alt="dfdfdf"
                    width="26px"
                    height="26px"
                  />
                </a>
                <span className="navbar-side__title">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SidbarAppLauncher;

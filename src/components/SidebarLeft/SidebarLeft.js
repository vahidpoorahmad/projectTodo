import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHouse,
  faCalendarDays,
  faBars,
  faSun,
  faUser,
  faPaperclip,
  faUserGroup,
  faEnvelope,
  faCheck,
  faFolderPlus,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import "./SidebarLeft.css";
import { useState } from "react";
import { connect } from "react-redux";

import { insertItems } from "../../ReduxStore/ReduxItems/ItemsActionCreator";

function SidebarLeft(props) {
  const [showSidbar, setShoSidbar] = useState(false);

  const showSidbarHandler = () => {
    setShoSidbar(false);
  };
  const hideSidbarHandler = () => {
    setShoSidbar(true);
  };

  const [input, setInput] = useState("");
  return (
    <>
      <div className="main-side__header">
        <div className="main-side__header--icon">
          <button
            className="main-side__header--icon-title"
            onClick={hideSidbarHandler}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <ul className="menu-side">
          <div>
            {props.ItemReducer.map((item, index) => {
              return (
                <NavLink
                  style={({ isActive }) => {
                    return { background: isActive ? "#dbd5d5" : "#f3f2f1" };
                  }}
                  className={`${
                    item.id === 4 ? "margin-bottom" : ""
                  } menu-side__item  `}
                  key={index}
                  to={`/${item.id >= 5 ? item.id : item.slug}`}
                >
                  <button className="menu-side__icon">
                    {item.id === 0 ? <FontAwesomeIcon icon={faSun} /> : ""}
                    {item.id === 1 ? <FontAwesomeIcon icon={faStar} /> : ""}
                    {item.id === 2 ? (
                      <FontAwesomeIcon icon={faCalendarDays} />
                    ) : (
                      ""
                    )}
                    {item.id === 3 ? <FontAwesomeIcon icon={faUser} /> : ""}
                    {item.id === 4 ? <FontAwesomeIcon icon={faHouse} /> : ""}
                    {item.id >= 5 ? <FontAwesomeIcon icon={faList} /> : ""}
                  </button>

                  <span className="menu-side__link">{item.title}</span>
                  <span style={{ textAlign: "right" }}>
                    {item.count ? item.count : ""}
                  </span>
                </NavLink>
              );
            })}
          </div>

          <div className="sidebar-addlist">
            <button className="sidebar-addlist__icon">
              <FontAwesomeIcon icon={faPlus} />
            </button>

            <input
              className="sidebar-addlist__input"
              type="text"
              placeholder="New list"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(event) => {
                if (event.keyCode === 13) {
                  props.ItemsDispatcher(input);
                  setInput("");
                }
              }}
            />

            <div className="ms-TooltipHost root-42">
              <button className="sidebar-addlist__icon--btn">
                <FontAwesomeIcon icon={faFolderPlus} />
              </button>
            </div>
          </div>
        </ul>
      </div>

      <div className="main-side__footer">
        <div className="main-side__footer__icon">
          <a
            href="https://www.google.com"
            className="main-side__footer__icon--a"
          >
            <FontAwesomeIcon icon={faPaperclip} />
          </a>
          <a
            href="https://www.google.com"
            className="main-side__footer__icon--a"
          >
            <FontAwesomeIcon icon={faCalendarDays} />
          </a>
          <a
            href="https://www.google.com"
            className="main-side__footer__icon--a"
          >
            <FontAwesomeIcon icon={faUserGroup} />
          </a>
          <a
            href="https://www.google.com"
            className="main-side__footer__icon--a"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://www.google.com"
            className="main-side__footer__icon--a"
          >
            <FontAwesomeIcon icon={faCheck} />
          </a>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    ItemReducer: state.ItemReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ItemsDispatcher: (title) => dispatch(insertItems(title)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SidebarLeft);

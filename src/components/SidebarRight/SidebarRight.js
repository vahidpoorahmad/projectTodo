import React from "react";
import "./SidebarRight.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faXmark,
  faSun,
  faBell,
  faCalendarDays,
  faCalendar,
  faPaperclip,
  faLocationArrow,
  faTrashCan,
  faClosedCaptioning,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";

function SidebarRight(props) {
  const Params = useParams();
  const filterItems = props.items.filter((item) => {
    if (item.slug) {
      return item.slug === Params.item;
    } else {
      return item.id === parseInt(Params.item);
    }
  });

  const task = props.Tasks.filter((item) => {
    return item.id === parseInt(Params.id);
  });

  return (
    <>
      <div className="sidebar-right__flex">
        <div className="sidebar-right__top">
          <div className="sidebar-right__detail">
            <div className="sidebar-right__detail--header">
              <div className="sidebar-right__detail--header--title">
                <div className="sidebar-right__detail--header-complated">
                  <input
                    type="checkbox"
                    className="sidebar-right__detail--header-complated--checked"
                  />
                </div>
                <div className="sidebar-right__detail--header-form">
                  <input
                    type="text"
                    className="sidebar-right__detail--header-form--input"
                    value={task[0].title}
                  />
                </div>
              </div>
              <div>
                <div className="sidebar-right__detail--header-importent">
                  <button className="sidebar-right__detail--header-importent--icon">
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                </div>
              </div>
            </div>
            <div className="sidebar-right__step">
              <div className="sidebar-right__step-r">
                <div className="sidebar-right__step--icon">
                  <button className="sidebar-right__step--icon-btn">
                    <FontAwesomeIcon icon={faCircle} />
                  </button>
                </div>
                <div className="sidebar-right__step--form">
                  <input
                    type="text"
                    placeholder="Add step"
                    className="sidebar-right__step--form-input"
                  />
                </div>
              </div>
              <div className="sidebar-right__step--add">
                <button className="sidebar-right__step--add-btn">Add</button>
              </div>
            </div>
          </div>
          <div className="sidebar-right__myday">
            <div className="sidebar-right__myday--iconsun">
              <button className="sidebar-right__myday--iconsun--btn">
                <FontAwesomeIcon icon={faSun} />
              </button>
            </div>
            <div className="sidebar-right__myday--text">
              <span className="sidebar-right__myday--text--title">
                Add to My Day
              </span>
            </div>
            <div className="sidebar-right__myday--iconclose">
              <button className="sidebar-right__myday--iconclose--btn">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>
          <div className="sidebar-right__chronicle">
            <div className="sidebar-right__remind">
              <div className="sidebar-right__remind--icon">
                <button className="sidebar-right__remind--icon-btn">
                  <FontAwesomeIcon icon={faBell} />
                </button>
              </div>
              <div className="sidebar-right__remind--text">
                <span className="sidebar-right__remind--text-title">
                  Reminde me
                </span>
              </div>
            </div>

            <div className="sidebar-right__date">
              <div className="sidebar-right__date--icon">
                <button className="sidebar-right__date--icon-btn">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </button>
              </div>
              <div className="sidebar-right__date--text">
                <span className="sidebar-right__date--text-title">
                  Add due date
                </span>
              </div>
            </div>
            <div className="sidebar-right__repeat">
              <div className="sidebar-right__repeat--icon">
                <button className="sidebar-right__repeat--icon-btn">
                  <FontAwesomeIcon icon={faCalendar} />
                </button>
              </div>
              <div className="sidebar-right__repeat--text">
                <span className="sidebar-right__repeat--text-title">
                  Repeate
                </span>
              </div>
            </div>
          </div>
          <div className="sidebar-right__pick">
            <div className="sidebar-right__pick--icon">
              <button className="sidebar-right__pick--icon-btn">
                <FontAwesomeIcon icon={faLocationArrow} />
              </button>
            </div>
            <div className="sidebar-right__pick--text">
              <span className="sidebar-right__pick--text-title">
                pick a category
              </span>
            </div>
          </div>
          <div className="sidebar-right__file">
            <div className="sidebar-right__file--icon">
              <button className="sidebar-right__file--icon-btn">
                <FontAwesomeIcon icon={faPaperclip} />
              </button>
            </div>
            <div className="sidebar-right__file--text">
              <span className="sidebar-right__file--text-title">Add file</span>
            </div>
          </div>
          <div className="sidebar-right__note">
            <div className="sidebar-right__note--icon">
              <button className="sidebar-right__note--icon-btn">
                <FontAwesomeIcon icon={faStar} />
              </button>
            </div>
            <div className="sidebar-right__note--text">
              <span className="sidebar-right__note--text-title">Add note</span>
            </div>
          </div>
        </div>
        <div className="sidebar-right__bottom">
          <div className="sidebar-right__bottom--hide">
            <button className="sidebar-right__bottom--hide--icon">
              <FontAwesomeIcon icon={faClosedCaptioning} />
            </button>
          </div>

          <div className="sidebar-right__bottom--text">
            <span className="sidebar-right__bottom--text--title">
              created on sun
            </span>
          </div>
          <div className="sidebar-right__bottom--delete">
            <button className="sidebar-right__bottom--delete--icon">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return { items: state.ItemReducer, Tasks: state.TaskReducer };
};
export default connect(mapStateToProps)(SidebarRight);

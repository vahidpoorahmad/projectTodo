import React from "react";
import "./Tasks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { toggelsComplated } from "../../../ReduxStore/ReduxTasks/TaskActionCreator";
import { toggelsStar } from "../../../ReduxStore/ReduxTasks/TaskActionCreator";
import { decrementCount } from "../../../ReduxStore/ReduxItems/ItemsActionCreator";
import { incrementCount } from "../../../ReduxStore/ReduxItems/ItemsActionCreator";

import { connect } from "react-redux";
function Tasks(props) {
  const changeHandler = () => {
    if (props.task.compated) {
      // true => flase
      props.incCountDispatcher(props.itemId);
      props.dicCountDispatcher(4);
    } else {
      // flase => true
      props.dicCountDispatcher(props.itemId);
    }
    props.complateDispatcher(props.itemId, props.task.id);
  };
  const clickHandler = () => {
    props.starDispacher(props.itemId, props.task.id);
    if (props.task.star) {
      // true => flase
      props.dicCountDispatcher(1);
    } else {
      // flase => true
      props.incCountDispatcher(1);
    }
  };

  return (
    <>
      <ul>
        <li className="add">
          <div className="list-menu">
            <div className="list__item-left">
              <input
                className="input"
                type="checkbox"
                onChange={changeHandler}
              />
            </div>

            <NavLink className="add__list-center" to={`${props.task.id}`}>
              <h3
                className="text--top "
                style={{
                  textDecoration: `${
                    props.task.compated ? "line-through" : ""
                  }`,
                }}
              >
                {props.task.title}
              </h3>
              <p className="text--bottom">task</p>
            </NavLink>

            <div className="list__item-right">
              <button
                className="btnicon"
                style={{ color: ` ${props.task.star ? "blue" : ""}` }}
                onClick={clickHandler}
              >
                <FontAwesomeIcon icon={faStar} />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    complateDispatcher: (itemId, taskId) =>
      dispatch(toggelsComplated(itemId, taskId)),
    starDispacher: (itemId, taskId) => dispatch(toggelsStar(itemId, taskId)),
    dicCountDispatcher: (itemId) => dispatch(decrementCount(itemId)),
    incCountDispatcher: (itemId) => dispatch(incrementCount(itemId)),
  };
};

export default connect(null, mapDispatchToProps)(Tasks);

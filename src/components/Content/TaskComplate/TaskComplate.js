import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { toggelsComplated } from "../../../ReduxStore/ReduxTasks/TaskActionCreator";
import { decrementCount } from "../../../ReduxStore/ReduxItems/ItemsActionCreator";
import { incrementCount } from "../../../ReduxStore/ReduxItems/ItemsActionCreator";
function TaskComplate(props) {
  const changeHandler = (taskId, compated, itemId) => {
    console.log(compated);
    if (compated) {
      // true => flase
      props.dicCountDispatcher(4);
      props.incCountDispatcher(itemId);
    } else {
      // flase => true
      props.dicCountDispatcher(props.itemId);
      props.incCountDispatcher(4);
    }
    props.complateDispatcher(props.itemId, taskId);
  };

  return (
    <>
      <div className="complated">
        <div className="complated__card">
          <div className="complated__card-icon">
            <button type="button" className="complated__card-btn">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
          <div className="complated__card-text">
            <p>Complated</p>
            <span className="count">{props.tasks.length}</span>
          </div>
        </div>
        <ul>
          {props.tasks.map((item) => {
            return (
              <li className="add" key={item.id}>
                <div className="list-menu">
                  <div className="list__item-left">
                    <input
                      className="input"
                      type="checkbox"
                      checked={item.compated ? true : false}
                      onChange={(e) =>
                        changeHandler(item.id, item.compated, item.itemId)
                      }
                    />
                  </div>

                  <NavLink className="add__list-center" to={`${item.id}`}>
                    <h3
                      className="text--top "
                      style={{
                        textDecoration: `${
                          item.compated ? "line-through" : ""
                        }`,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text--bottom">task</p>
                  </NavLink>

                  <div className="list__item-right">
                    <button className="btnicon">
                      <FontAwesomeIcon icon={faStar} />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    complateDispatcher: (itemId, taskId) =>
      dispatch(toggelsComplated(itemId, taskId)),
    dicCountDispatcher: (itemId) => dispatch(decrementCount(itemId)),
    incCountDispatcher: (itemId) => dispatch(incrementCount(itemId)),
  };
};

export default connect(null, mapDispatchToProps)(TaskComplate);

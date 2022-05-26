import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Content.css";
import Tasks from "./ListTasks/Tasks";
import { insertTask } from "../../ReduxStore/ReduxTasks/TaskActionCreator";
import { incrementCount } from "../../ReduxStore/ReduxItems/ItemsActionCreator";
import TaskComplate from "./TaskComplate/TaskComplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBell,
  faCalendarDays,
  faCalendar,
  faUpDown,
  faBars,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { connect } from "react-redux";

function Content(props) {
  const Params = useParams();

  const filterItems = props.items.filter((item) => {
    if (item.slug) {
      return item.slug === Params.item;
    } else {
      return item.id === parseInt(Params.item);
    }
  });

  const complateFilter = props.Tasks.filter((task) => {
    return task.compated === true && task.itemId === filterItems[0].id;
  });
  const AllComplateFilter = props.Tasks.filter((task) => {
    return task.compated === true;
  });
  const AllUnComplateFilter = props.Tasks.filter((task) => {
    return task.compated === false;
  });
  const UnComplateFilter = props.Tasks.filter((task) => {
    return task.itemId === filterItems[0].id;
  });
  const filterStar = props.Tasks.filter((task) => {
    return task.star === true && task.compated === false;
  });

  const TextSearch = props.Tasks.filter((task) => {
    const text = "d";
    console.log(task.title.search(text));
    return task.title.search(text) >= 0;
  });
  console.log(TextSearch);

  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const clickHandler = () => {
    if (filterItems[0].id === 1) {
      props.taskDespatcher(input, filterItems[0].id, true);
    } else {
      props.taskDespatcher(input, filterItems[0].id, false);
    }

    props.incrementCountDispather(filterItems[0].id);
    props.incrementCountDispather(4);
    setInput("");
  };
  const keyDownHandler = (e) => {
    if (e.keyCode === 13) {
      if (filterItems[0].id === 1) {
        props.taskDespatcher(input, filterItems[0].id, true);
      } else {
        props.taskDespatcher(input, filterItems[0].id, false);
      }
      props.incrementCountDispather(filterItems[0].id);
      props.incrementCountDispather(4);
      setInput("");
    }
  };

  return (
    <>
      <div className="task">
        <div className="task__top">
          <div className="task__top--size">
            <div className="task__top--title">
              <div className="task__top--title-icon">
                <button className="task--icon">
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              <div className="task__top--title-title">
                <h2 className="text--title">{filterItems[0].title}</h2>
              </div>
              <div className="task__top--title-icon">
                <button className="task--icon">
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
              </div>
            </div>
            <div className="task__top--subtitle"></div>
          </div>
          {filterItems[0].id === 0 || filterItems[0].id === 4 ? (
            <div className="task-right">
              <div className="task-right__meta">
                <div className="task-right__meta--icon">
                  <button className="task-right__meta--icon-right">
                    <FontAwesomeIcon icon={faUpDown} />
                  </button>
                  <span className="task-right_text">Sort</span>
                </div>

                {filterItems[0].id === 0 ? (
                  <div className="task-right__meta--icon">
                    <button className="task-right__meta--icon-right">
                      <FontAwesomeIcon icon={faSun} />
                    </button>
                    <span className="task-right_text">Suggestions</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="task__bottom">
        <div className="form">
          <div className="form__control">
            <div className="form__top">
              <button className="form__top-icon">
                <FontAwesomeIcon icon={faCircle} />
              </button>
              <input
                placeholder="Add Task"
                type="text"
                className="form__top-input"
                value={input}
                onChange={inputHandler}
                onKeyDown={keyDownHandler}
              />
            </div>
            <div className="form__bootom">
              <div className="form__bottom--icon">
                <button className="form__bottom--icon-btn">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </button>
                <button className="form__bottom--icon-btn">
                  <FontAwesomeIcon icon={faBell} />
                </button>
                <button className="form__bottom--icon-btn">
                  <FontAwesomeIcon icon={faCalendar} />
                </button>
              </div>
              <div className="add-list">
                <button className="add-list__btn" onClick={clickHandler}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-background">
        {filterItems[0].id === 0 // mydAy
          ? UnComplateFilter.map((item) => {
              if (!item.compated) {
                return (
                  <Tasks itemId={filterItems[0].id} task={item} key={item.id} />
                );
              }
            })
          : ""}

        {filterItems[0].id === 1 // important
          ? filterStar.map((item) => (
              <Tasks itemId={filterItems[0].id} task={item} key={item.id} />
            ))
          : ""}

        {filterItems[0].id === 4 // task
          ? AllUnComplateFilter.map((item) => {
              return (
                <Tasks itemId={filterItems[0].id} task={item} key={item.id} />
              );
            })
          : ""}

        {filterItems[0].id > 4
          ? UnComplateFilter.map((item) => {
              return (
                <Tasks itemId={filterItems[0].id} task={item} key={item.id} />
              );
            })
          : ""}

        {filterItems[0].id === 4 ? ( // taks
          <TaskComplate tasks={AllComplateFilter} itemId={filterItems[0].id} />
        ) : // may day  , ..
        filterItems[0].id !== 1 ? (
          <TaskComplate tasks={complateFilter} itemId={filterItems[0].id} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    items: state.ItemReducer,
    Tasks: state.TaskReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskDespatcher: (title, itemId, star) =>
      dispatch(insertTask(title, itemId, star)),
    incrementCountDispather: (countId) => dispatch(incrementCount(countId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

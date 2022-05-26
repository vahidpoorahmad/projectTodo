import React from "react";

import "./Filter.css";
function Filter({ filtersearch, value }) {
  return (
    <div className=" form__search">
      <button className="formSearch__btn ">
        <i className="fa fa-user "></i>
      </button>
      <input
        className="formSearch__input"
        value={value}
        type="text"
        onChange={filtersearch}
      />
    </div>
  );
}

export default Filter;

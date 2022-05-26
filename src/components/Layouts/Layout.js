import React from "react";
import { Outlet } from "react-router-dom";
import Content from "../Content/Content";

function Layout() {
  return (
    <>
      <div className="main">
        <Content />
      </div>
      <div className="sidebar-right">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppLauncher from "./components/Header/App-launcher/AppLauncher";
import HederCenter from "./components/Header/Header-center/HederCenter";
import HeaderAccount from "./components/Header/Header-account/HeaderAccount";
import SidebarLeft from "./components/SidebarLeft/SidebarLeft";
import Layout from "./components/Layouts/Layout";
import { Provider } from "react-redux";
import { store } from "./ReduxStore/store";
import Content from "./components/Content/Content";

import SidebarRight from "./components/SidebarRight/SidebarRight";

function App() {
  return (
    <Provider store={store}>
      <div className="countainer">
        <header>
          <AppLauncher />
          <HederCenter />
          <HeaderAccount />
        </header>
        <div className="content">
          <div className="row">
            <div className="sidebar-left">
              <SidebarLeft />
            </div>

            <Routes>
              <Route path="/:item" element={<Layout />}>
                <Route path=":id" element={<SidebarRight />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;

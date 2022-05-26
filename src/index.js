import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// import ReactDOM from "react-dom";
// import "./index.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from "./App";

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path="tasks/*" element={<App />}></Route>
//     </Routes>
//   </Router>,
//   document.getElementById("root")
// );

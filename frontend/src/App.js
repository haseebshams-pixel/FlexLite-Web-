import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HomeMain from "./screens/Student/main";
import StudLogin from "./screens/Student/login";
import TeachLogin from "./screens/Teacher/login";
import Admin from "./screens/Admin/login";
import TeachMain from "./screens/Teacher/main";
import AdminMain from "./screens/Admin/main";
import Choose from "./screens/choose";

import User from "./user.js";

function App() {
  const location = useLocation();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Choose} />
          <Route path="/studLogin" component={StudLogin} />
          <Route path="/teachLogin" component={TeachLogin} />
          <Route path="/admin" component={Admin} />
          <Route path="/studhome" component={HomeMain} />
          <Route path="/teachhome" component={TeachMain} />
          <Route path="/adminhome" component={AdminMain} />
          <Route component={Choose} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;

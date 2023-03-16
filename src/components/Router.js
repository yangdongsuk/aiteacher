import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../routes/Home.js";
import QuestionStepper from "./AiTeacher/QuestionStepper.js";
import ResultAnswer from "../routes/ResultAnswer.js";
import MainHeader from "./Home/MainHeader.js";
import { AppShell } from "@mantine/core";
import Login from "../routes/Login.js";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <AppShell
          header={<MainHeader isLoggedIn={isLoggedIn} userObj={userObj} />}
        >
          {isLoggedIn ? (
            <Routes>
              <Route
                path="/"
                element={<Home isLoggedIn={isLoggedIn} userObj={userObj} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/question" element={<QuestionStepper />} />
              <Route path="/result" element={<ResultAnswer />} />
              <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<Home isLoggedIn={isLoggedIn} />} />
            </Routes>
          )}
        </AppShell>
      </Router>
    </>
  );
};

export default AppRouter;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home.js";
import QuestionStepper from "./AiTeacher/QuestionStepper.js";
import Testmodule from "./AiTeacher/test.js";
import ResultAnswer from "../routes/ResultAnswer.js";
import MainHeader from "./Home/MainHeader.js";
import { AppShell } from "@mantine/core";
import Login from "../routes/Login.js";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <>
      <Router>
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
              <Route path="*" element={<div>여기 아니에요</div>} />
            </Routes>
          ) : (
            <Routes>
              <Route path="*" element={<Login />} />
            </Routes>
          )}
        </AppShell>
      </Router>
    </>
  );
};

export default AppRouter;

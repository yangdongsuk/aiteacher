import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home.js";
import QuestionStepper from "./AiTeacher/QuestionStepper.js";
import Testmodule from "./AiTeacher/test.js";
import ResultAnswer from "../routes/ResultAnswer.js";
import MainHeader from "./Home/MainHeader.js";
import { AppShell } from "@mantine/core";

const AppRouter = () => {
  return (
    <>
      <Router>
        <AppShell header={<MainHeader />}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<QuestionStepper />} />
            <Route path="/result" element={<ResultAnswer />} />
            <Route path="*" element={<div>여기 아니에요</div>} />
          </Routes>
        </AppShell>
      </Router>
    </>
  );
};

export default AppRouter;

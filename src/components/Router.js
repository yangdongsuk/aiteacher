import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home.js";
import QuestionStepper from "./AiTeacher/QuestionStepper.js";
import Testmodule from "./AiTeacher/test.js";
import ResultAnswer from "../routes/ResultAnswer.js";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<QuestionStepper />} />
          <Route path="/result" element={<ResultAnswer />} />
          <Route path="*" element={<div>여기 아니에요</div>} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

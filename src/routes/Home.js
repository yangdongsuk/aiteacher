import React from "react";
import { Grid, Flex, Button } from "@mantine/core";
import CardDemo from "../components/Home/Card";
import Testmodule from "../components/AiTeacher/test";
import QuestionStepper from "../components/AiTeacher/QuestionStepper";
import MainHeader from "../components/Home/MainHeader";
import fetchCompletion from "../models/getAnswerAi";
import { useNavigate } from "react-router-dom";
import { auth } from "../fbase";
// 초기 화면
const Home = ({ isLoggedIn, userObj }) => {
  const navigate = useNavigate();
  const getanswer = async () => {
    const res = await fetchCompletion("longtxt", 0.7);
    console.log(res);
  };

  return (
    <>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <CardDemo />
        <CardDemo />
        <CardDemo />
      </Flex>

      <Button onClick={getanswer}>git?</Button>
    </>
  );
};

export default Home;

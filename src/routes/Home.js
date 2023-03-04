import React from "react";
import { Grid } from "@mantine/core";
import CardDemo from "../components/Home/Card";
import Testmodule from "../components/AiTeacher/test";
import QuestionStepper from "../components/AiTeacher/QuestionStepper";
// 초기 화면
const Home = () => {
  return (
    <>
      <div>hello</div>
      <Grid>
        <Grid.Col span={4}>
          <CardDemo />
        </Grid.Col>
        <Grid.Col span={4}>
          <CardDemo />
        </Grid.Col>
        <Grid.Col span={4}>
          <CardDemo />
        </Grid.Col>
      </Grid>
      <Testmodule />
    </>
  );
};

export default Home;
